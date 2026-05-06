# Getting Started

## Requirements

- Node.js 20.19 or newer
- pnpm 10 or newer
- React and Tailwind CSS v4 project

## Run the Example

```bash
git clone https://github.com/xwartz/token-ui.git
cd token-ui
pnpm install
pnpm dev
```

## Initialize Your App

```bash
pnpm dlx @xwartz/token-ui@latest init
```

This writes `components.json`, `src/lib/utils.ts`, and `src/styles/globals.css`.

## Add a Component

```bash
pnpm dlx @xwartz/token-ui@latest add card
```

The component is copied to `src/components/ui/card.tsx`. Import it from your local app:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
```

## Add Multiple Components

```bash
pnpm dlx @xwartz/token-ui@latest add button input badge dialog
```

Install any peer dependencies printed by the CLI.
