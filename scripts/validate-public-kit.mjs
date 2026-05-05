import { spawnSync } from 'node:child_process'

const commands = [
  ['pnpm', ['check']],
  ['pnpm', ['typecheck']],
  ['pnpm', ['cli:dry-run']],
  ['pnpm', ['--filter', 'vite-example', 'build']],
]

for (const [command, args] of commands) {
  const result = spawnSync(command, args, { stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status ?? 1)
}
