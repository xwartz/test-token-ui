# Component Usage

Components are written as source files that can be copied into your app.

## Card

```bash
pnpm dlx @xwartz/test-token-ui@latest add card
```

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>Token balances go here.</CardContent>
    </Card>
  )
}
```

## Button

```bash
pnpm dlx @xwartz/test-token-ui@latest add button
```

Use variants instead of custom classes when possible: `default`, `secondary`, `outline`, `ghost`, `destructive`, `foreground`, and `link`.

## Dialog

```bash
pnpm dlx @xwartz/test-token-ui@latest add dialog button
```

Dialog uses Radix primitives and the UI Kit overlay token `bg-dark-surface/50`.
