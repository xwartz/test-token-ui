# Design Tokens

`globals.css` is the runtime contract for colors, spacing, radius, typography, and shadows.

## Color Usage

Use semantic classes only:

- `bg-background`, `bg-card`, `bg-secondary`, `bg-accent`
- `text-foreground`, `text-muted-foreground`, `text-primary-foreground`
- `border-border`, `border-border-strong`, `border-info-border`

Avoid raw color literals and palette utilities such as `text-white`, `bg-black`, or `border-red-500`.

## Spacing and Radius

Use Tailwind utilities on the 4pt grid: `p-4`, `gap-3`, `px-6`, `h-12`.

Buttons use `rounded-full`. Cards and dialogs use rounded card surfaces.

## Elevation

Use CSS variable shadows:

```tsx
<div className="shadow-[var(--shadow-card)]" />
```
