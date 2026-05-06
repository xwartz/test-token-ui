import { Button } from "@xwartz/token-ui-source/components/button"
import { ExternalLink, Menu, X } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"

const navItems = [
  { href: "#/docs", label: "Docs" },
  { href: "#/docs/components", label: "Components" },
  { href: "#/docs/theming", label: "Tokens" },
  { href: "#/docs/cli", label: "CLI" },
]

interface DocsShellProps {
  children: ReactNode
}

export function DocsShell({ children }: DocsShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-border border-b bg-surface-glass-page/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <a className="flex items-center gap-3" href="#/docs">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-body-sm font-bold">
              im
            </span>
            <span className="font-heading text-body-md font-semibold">
              Token UI
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild size="sm" variant="outline">
              <a
                href="https://github.com/xwartz/token-ui"
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink className="size-4" />
                GitHub
              </a>
            </Button>
          </div>

          <Button
            aria-label="Toggle navigation"
            className="md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            size="icon"
            variant="ghost"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>

        {isMenuOpen ? (
          <nav className="grid gap-1 border-border border-t bg-card p-4 md:hidden">
            {navItems.map((item) => (
              <a
                className="rounded-md px-4 py-3 text-body-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      {children}
    </div>
  )
}
