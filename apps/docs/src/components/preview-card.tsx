import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@xwartz/test-token-ui-source/components/card"
import type { ReactNode } from 'react'
import { CodeBlock } from './code-block'

interface PreviewCardProps {
  title: string
  description: string
  children: ReactNode
  code: string
}

export function PreviewCard({ title, description, children, code }: PreviewCardProps) {
  return (
    <Card className="scroll-mt-24">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="rounded-xl border border-border bg-background p-6">{children}</div>
        <CodeBlock code={code} language="tsx" />
      </CardContent>
    </Card>
  )
}
