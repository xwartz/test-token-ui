import fs from 'node:fs/promises'
import path from 'node:path'
import { baseFiles } from '../registry.js'
import { copyRegistryFile } from './shared.js'

export type InitOptions = {
  cwd: string
  dryRun: boolean
}

export async function initCommand({ cwd, dryRun }: InitOptions) {
  const configPath = path.join(cwd, 'components.json')
  const config = {
    style: "token-ui",
    tsx: true,
    tailwind: { css: "src/styles/globals.css" },
    aliases: {
      components: "@/components",
      ui: "@/components/ui",
      lib: "@/lib",
    },
  }

  if (dryRun) {
    console.log(`Would write ${path.relative(process.cwd(), configPath)}`)
  } else {
    await fs.mkdir(path.dirname(configPath), { recursive: true })
    await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`)
  }

  for (const file of baseFiles) {
    await copyRegistryFile({ file, cwd, dryRun })
  }

  console.log("Initialized token-ui project files.")
}
