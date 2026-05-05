import { execFileSync } from 'node:child_process'
import { dirname, basename, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(scriptDir, '..')
const repoRoot = resolve(docsDir, '..', '..')

const isBuildOnly = process.argv.includes('--build-only')
const repoName = basename(repoRoot)
const basePath = normalizeBase(process.env.DOCS_BASE_PATH ?? process.env.GH_PAGES_BASE ?? `/${repoName}/`)
const branch = process.env.GH_PAGES_BRANCH ?? 'gh-pages'
const remote = process.env.GH_PAGES_REMOTE

run('pnpm', ['exec', 'vite', 'build', '--base', basePath])

if (!isBuildOnly) {
  const publishArgs = ['exec', 'gh-pages', '-d', 'dist', '-b', branch]

  if (remote) {
    publishArgs.push('-r', remote)
  }

  run('pnpm', publishArgs)
}

function normalizeBase(value) {
  const trimmed = value.trim()

  if (!trimmed || trimmed === '/') {
    return '/'
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

function run(command, args) {
  execFileSync(command, args, {
    cwd: docsDir,
    stdio: 'inherit',
  })
}
