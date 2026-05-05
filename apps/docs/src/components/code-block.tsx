import { Button } from "@xwartz/test-token-ui-source/components/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setHasCopied(true)
    window.setTimeout(() => setHasCopied(false), 1600)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-foreground text-background shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between border-background/10 border-b px-4 py-3">
        <span className="text-caption text-background/70">{language}</span>
        <Button
          aria-label="Copy code"
          className="text-background hover:bg-background/10 hover:text-background"
          onClick={handleCopy}
          size="icon-sm"
          variant="ghost"
        >
          {hasCopied ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-body-sm leading-6">
        <code>{code}</code>
      </pre>
    </div>
  )
}
