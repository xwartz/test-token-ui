import { Badge } from "@xwartz/token-ui-source/components/badge"
import { Button } from "@xwartz/token-ui-source/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@xwartz/token-ui-source/components/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@xwartz/token-ui-source/components/dialog"
import { Input } from "@xwartz/token-ui-source/components/input"
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

const assets = [
  { symbol: "ETH", name: "Ethereum", value: "$8,420.16", change: "+2.4%" },
  { symbol: "USDC", name: "USD Coin", value: "$2,180.00", change: "+0.0%" },
  { symbol: "IMT", name: "Community token", value: "$640.88", change: "+8.6%" },
]

export function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-8 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="flex flex-col gap-5">
            <Badge className="w-fit" variant="primary">
              Token UI
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-heading text-display-lg font-bold tracking-tight">
                Build token-centric interfaces with a consistent UI Kit.
              </h1>
              <p className="max-w-2xl text-body-lg text-muted-foreground">
                Copy source components, keep design tokens intact, and build
                wallet-quality screens without inventing new UI rules.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Get started
                <ArrowRight />
              </Button>
              <Button size="lg" variant="secondary">
                View components
              </Button>
            </div>
          </div>

          <Card className="bg-surface-blue">
            <CardHeader>
              <CardTitle>Design system rules</CardTitle>
              <CardDescription>
                Reuse semantic tokens and source-first components.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center gap-3 rounded-md bg-card p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <p className="text-body-md font-semibold">
                    Semantic tokens only
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    No raw colors or palette utilities.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-card p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-success-surface text-success-text">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <p className="text-body-md font-semibold">
                    Source-first components
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    Add files with the token-ui CLI.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio preview</CardTitle>
              <CardDescription>
                Token-first rows with simple, reusable primitives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {assets.map((asset) => (
                <div
                  key={asset.symbol}
                  className="flex items-center justify-between rounded-md border border-border bg-background p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-secondary font-semibold">
                      {asset.symbol.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-body-md font-semibold">
                        {asset.symbol}
                      </p>
                      <p className="text-body-sm text-muted-foreground">
                        {asset.name}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-body-md font-semibold">{asset.value}</p>
                    <p className="text-body-sm text-positive">{asset.change}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Try a primitive</CardTitle>
              <CardDescription>
                Inputs, dialogs, and buttons share the same token contract.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input placeholder="Search token" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Synced</Badge>
                <Badge variant="neutral">Light</Badge>
                <Badge variant="outline">Accessible</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="foreground">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ready to customize</DialogTitle>
                    <DialogDescription>
                      Components are copied into your app, so teams can adapt
                      them while preserving the design system.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
