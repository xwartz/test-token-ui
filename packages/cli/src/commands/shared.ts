import fs from 'node:fs/promises'
import path from 'node:path'
import { getRegistryRoot } from '../lib/paths.js'

const destinations: Record<string, string> = {
  'hooks/use-mobile.ts': 'src/hooks/use-mobile.ts',
  'lib/utils.ts': 'src/lib/utils.ts',
  'styles/globals.css': 'src/styles/globals.css',
}

export function getDestination(file: string) {
  if (file.startsWith('hooks/')) {
    return `src/${file}`
  }

  return destinations[file] ?? `src/components/ui/${path.basename(file)}`
}

export async function copyRegistryFile({
  file,
  cwd,
  dryRun,
}: {
  file: string
  cwd: string
  dryRun: boolean
}) {
  const registryRoot = getRegistryRoot()
  const sourcePath = path.join(registryRoot, file)
  const destinationPath = path.join(cwd, getDestination(file))

  if (dryRun) {
    console.log(`Would copy ${file} -> ${path.relative(process.cwd(), destinationPath)}`)
    return
  }

  await fs.mkdir(path.dirname(destinationPath), { recursive: true })
  await fs.copyFile(sourcePath, destinationPath)
}
