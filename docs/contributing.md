# Contributing

Keep changes small and source-readable.

Before opening a pull request:

```bash
pnpm check
pnpm typecheck
pnpm build
pnpm cli:dry-run
```

Do not add business logic, wallet signing, private keys, chain registries, or API calls to this UI Kit.
