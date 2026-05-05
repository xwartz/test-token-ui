#!/usr/bin/env node
import path from 'node:path'
import { addCommand } from './commands/add.js'
import { initCommand } from './commands/init.js'
import { registry } from './registry.js'

function parseArgs(argv: string[]) {
  const [command, ...rest] = argv
  const components: string[] = []
  let cwd = process.cwd()
  let dryRun = false

  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index]

    if (arg === '--dry-run') {
      dryRun = true
      continue
    }

    if (arg === '--cwd') {
      const value = rest[index + 1]
      if (!value) throw new Error('--cwd requires a path')
      cwd = path.resolve(process.cwd(), value)
      index += 1
      continue
    }

    components.push(arg)
  }

  return { command, components, cwd, dryRun }
}

function printHelp() {
  console.log(`test-token-ui

Usage:
  test-token-ui init [--cwd path] [--dry-run]
  test-token-ui add card [button input] [--cwd path] [--dry-run]
  test-token-ui list
`)
}

async function main() {
  const { command, components, cwd, dryRun } = parseArgs(process.argv.slice(2))

  if (!command || command === '--help' || command === '-h') {
    printHelp()
    return
  }

  if (command === 'init') {
    await initCommand({ cwd, dryRun })
    return
  }

  if (command === 'add') {
    await addCommand({ components, cwd, dryRun })
    return
  }

  if (command === 'list') {
    console.log(Object.keys(registry).sort().join('\n'))
    return
  }

  throw new Error(`Unknown command "${command}"`)
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error)
  console.error(message)
  process.exitCode = 1
})
