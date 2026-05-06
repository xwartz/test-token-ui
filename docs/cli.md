# CLI

`@xwartz/token-ui` is a source-copy CLI inspired by shadcn.

## Commands

```bash
pnpm dlx @xwartz/token-ui@latest init
pnpm dlx @xwartz/token-ui@latest add card
pnpm dlx @xwartz/token-ui@latest list
```

## Dry Run

```bash
pnpm dlx @xwartz/token-ui@latest add card --dry-run
```

## First Release Scope

- `init`: create config and copy base files.
- `add`: copy component files from the registry.
- `list`: show available components.

Future releases can add `diff`, registry URLs, and update workflows.
