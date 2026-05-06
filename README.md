# test-token-ui

`test-token-ui` is the source-first React UI kit. It provides reusable components, design tokens, and a component-copy CLI for building consistent token-centric interfaces.

It follows the shadcn-style model: components are copied into your project instead of consumed as a locked runtime package.

## Docs Preview

- [https://test-token-ui-docs.vercel.app](https://test-token-ui-docs.vercel.app)

## Quick Start

```bash
git clone https://github.com/xwartz/test-token-ui.git
cd test-token-ui
pnpm install
pnpm dev
```

The Vite example shows the core primitives, tokens, and composition patterns.

## Install In Your App

```bash
pnpm dlx @xwartz/test-token-ui@latest init
pnpm dlx @xwartz/test-token-ui@latest add button card input badge dialog
```

The CLI copies component source, `src/lib/utils.ts`, and `src/styles/globals.css` into your app. It also prints peer dependencies that should be installed.

## Manual Copy

```bash
cp packages/ui/src/components/button.tsx ./src/components/ui/button.tsx
cp packages/ui/src/lib/utils.ts ./src/lib/utils.ts
cp packages/ui/src/styles/globals.css ./src/styles/globals.css
```

## Design Tokens

Use semantic tokens from `globals.css`: `bg-card`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, and shadows such as `shadow-[var(--shadow-card)]`.

Do not use raw color values or Tailwind palette utilities in UI code. Buttons are pill-shaped, cards use rounded surfaces, and spacing follows a 4pt grid.

## Docs

- [Getting Started](docs/getting-started.md)
- [CLI](docs/cli.md)
- [Design Tokens](docs/design-tokens.md)
- [Component Usage](docs/component-usage.md)
