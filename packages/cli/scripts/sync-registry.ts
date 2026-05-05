import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { baseFiles, registry } from '../src/registry.ts'

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const workspaceRoot = path.resolve(packageRoot, '../..')
const sourceRoot = path.join(workspaceRoot, 'packages/ui/src')
const registryRoot = path.join(packageRoot, 'registry')

const generatedFiles = Array.from(
  new Set([...baseFiles, ...Object.values(registry).flatMap((item) => item.files)]),
).sort()

const replacements: Array<[RegExp, string]> = [
  [
    /from ['"]@xwartz\/test-token-ui-source\/lib\/utils['"]/g,
    "from '@/lib/utils'",
  ],
  [
    /from ['"]@xwartz\/test-token-ui-source\/hooks\/([^'"]+)['"]/g,
    "from '@/hooks/$1'",
  ],
  [
    /from ['"]@xwartz\/test-token-ui-source\/components\/([^'"]+)['"]/g,
    "from '@/components/ui/$1'",
  ],
]

function sortGeneratedImports(contents: string) {
  const lines = contents.split('\n')
  const importBlocks: string[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (line.trim() === '') {
      index += 1
      continue
    }

    if (!line.startsWith('import ')) {
      break
    }

    const block = [line]
    index += 1

    while (
      index < lines.length &&
      !block.at(-1)?.includes(' from ') &&
      !block.at(-1)?.match(/^import\s+['"]/)
    ) {
      block.push(lines[index])
      index += 1
    }

    importBlocks.push(normalizeImportBlock(block))
  }

  if (importBlocks.length === 0) {
    return contents
  }

  const rest = lines.slice(index)
  while (rest[0]?.trim() === '') {
    rest.shift()
  }

  const aliasImports = importBlocks.filter((block) => block.includes("from '@/"))
  const otherImports = importBlocks.filter((block) => !block.includes("from '@/"))

  return [...otherImports, ...aliasImports, '', ...rest].join('\n')
}

function normalizeImportBlock(block: string[]) {
  if (block.length === 1) {
    return block[0]
  }

  const firstLine = block[0]
  const lastLine = block.at(-1)

  if (!firstLine?.startsWith('import {') || !lastLine?.includes('} from ')) {
    return block.join('\n')
  }

  const importNames = block
    .slice(1, -1)
    .map((line) => line.trim().replace(/,$/, ''))
    .filter(Boolean)
    .join(', ')
  const moduleSpecifier = lastLine.slice(lastLine.indexOf(' from '))
  const singleLineImport = `import { ${importNames} }${moduleSpecifier}`

  return singleLineImport.length <= 100 ? singleLineImport : block.join('\n')
}

function transformRegistryFile({ contents, file }: { contents: string; file: string }) {
  if (file === 'styles/globals.css') {
    return contents
      .split('\n')
      .filter(
        (line) =>
          !line.includes('@source "../../../apps/') &&
          !line.includes('@source "../../../examples/'),
      )
      .join('\n')
  }

  const transformedContents = replacements.reduce(
    (nextContents, [pattern, replacement]) => nextContents.replace(pattern, replacement),
    contents,
  )

  return sortGeneratedImports(transformedContents)
}

async function syncRegistry() {
  await fs.rm(registryRoot, { force: true, recursive: true })

  for (const file of generatedFiles) {
    const sourcePath = path.join(sourceRoot, file)
    const destinationPath = path.join(registryRoot, file)
    const contents = await fs.readFile(sourcePath, 'utf8')
    const transformedContents = transformRegistryFile({ contents, file })

    await fs.mkdir(path.dirname(destinationPath), { recursive: true })
    await fs.writeFile(destinationPath, transformedContents)
  }

  console.log(`Synced ${generatedFiles.length} registry files from packages/ui/src.`)
}

await syncRegistry()
