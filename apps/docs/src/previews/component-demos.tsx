import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@xwartz/test-token-ui-source/components/accordion'
import * as ActionBarUI from '@xwartz/test-token-ui-source/components/action-bar'
import * as AlertUI from '@xwartz/test-token-ui-source/components/alert'
import * as AlertDialogUI from '@xwartz/test-token-ui-source/components/alert-dialog'
import * as AspectRatioUI from '@xwartz/test-token-ui-source/components/aspect-ratio'
import * as AssetRowUI from '@xwartz/test-token-ui-source/components/asset-row'
import * as AvatarUI from '@xwartz/test-token-ui-source/components/avatar'
import { Badge } from '@xwartz/test-token-ui-source/components/badge'
import * as BottomSheetModalUI from '@xwartz/test-token-ui-source/components/bottom-sheet-modal'
import * as BreadcrumbUI from '@xwartz/test-token-ui-source/components/breadcrumb'
import { Button } from '@xwartz/test-token-ui-source/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@xwartz/test-token-ui-source/components/card'
import * as CalendarUI from '@xwartz/test-token-ui-source/components/calendar'
import * as CarouselUI from '@xwartz/test-token-ui-source/components/carousel'
import * as ChartUI from '@xwartz/test-token-ui-source/components/chart'
import * as ChatBubbleUI from '@xwartz/test-token-ui-source/components/chat-bubble'
import * as CheckboxUI from '@xwartz/test-token-ui-source/components/checkbox'
import * as ChecklistCardUI from '@xwartz/test-token-ui-source/components/checklist-card'
import * as ChipUI from '@xwartz/test-token-ui-source/components/chip'
import * as CollapsibleUI from '@xwartz/test-token-ui-source/components/collapsible'
import * as CommandUI from '@xwartz/test-token-ui-source/components/command'
import * as ContextMenuUI from '@xwartz/test-token-ui-source/components/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@xwartz/test-token-ui-source/components/dialog'
import * as DrawerUI from '@xwartz/test-token-ui-source/components/drawer'
import * as DropdownMenuUI from '@xwartz/test-token-ui-source/components/dropdown-menu'
import * as FeatureItemUI from '@xwartz/test-token-ui-source/components/feature-item'
import * as FormUI from '@xwartz/test-token-ui-source/components/form'
import * as HoldingCardUI from '@xwartz/test-token-ui-source/components/holding-card'
import * as HoverCardUI from '@xwartz/test-token-ui-source/components/hover-card'
import * as IconBoxUI from '@xwartz/test-token-ui-source/components/icon-box'
import * as IconButtonUI from '@xwartz/test-token-ui-source/components/icon-button'
import { Input } from '@xwartz/test-token-ui-source/components/input'
import * as InputOtpUI from '@xwartz/test-token-ui-source/components/input-otp'
import * as LabelUI from '@xwartz/test-token-ui-source/components/label'
import * as MenubarUI from '@xwartz/test-token-ui-source/components/menubar'
import * as NavItemUI from '@xwartz/test-token-ui-source/components/nav-item'
import * as NavigationMenuUI from '@xwartz/test-token-ui-source/components/navigation-menu'
import * as PaginationUI from '@xwartz/test-token-ui-source/components/pagination'
import * as PopoverUI from '@xwartz/test-token-ui-source/components/popover'
import * as ProgressUI from '@xwartz/test-token-ui-source/components/progress'
import * as RadioGroupUI from '@xwartz/test-token-ui-source/components/radio-group'
import * as ResizableUI from '@xwartz/test-token-ui-source/components/resizable'
import * as ScrollAreaUI from '@xwartz/test-token-ui-source/components/scroll-area'
import * as SectionPanelUI from '@xwartz/test-token-ui-source/components/section-panel'
import * as SelectUI from '@xwartz/test-token-ui-source/components/select'
import * as SeparatorUI from '@xwartz/test-token-ui-source/components/separator'
import * as SheetUI from '@xwartz/test-token-ui-source/components/sheet'
import * as SidebarUI from '@xwartz/test-token-ui-source/components/sidebar'
import * as SkeletonUI from '@xwartz/test-token-ui-source/components/skeleton'
import * as SliderUI from '@xwartz/test-token-ui-source/components/slider'
import * as SonnerUI from '@xwartz/test-token-ui-source/components/sonner'
import * as StatCellUI from '@xwartz/test-token-ui-source/components/stat-cell'
import * as StepCardUI from '@xwartz/test-token-ui-source/components/step-card'
import * as SwitchUI from '@xwartz/test-token-ui-source/components/switch'
import * as TableUI from '@xwartz/test-token-ui-source/components/table'
import * as TabsUI from '@xwartz/test-token-ui-source/components/tabs'
import * as TaskCardUI from '@xwartz/test-token-ui-source/components/task-card'
import * as TextareaUI from '@xwartz/test-token-ui-source/components/textarea'
import * as ToastUI from '@xwartz/test-token-ui-source/components/toast'
import * as ToggleUI from '@xwartz/test-token-ui-source/components/toggle'
import * as ToggleGroupUI from '@xwartz/test-token-ui-source/components/toggle-group'
import * as TooltipUI from '@xwartz/test-token-ui-source/components/tooltip'
import { ArrowRight, Search, ShieldCheck, Sparkles, Wallet } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { createElement, type ElementType, type ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

type ExampleArgs = {
  componentName: string
  displayName: string
  primaryExport: string
}

export interface ComponentDocExample {
  code: string
  description: string
  preview: ReactNode
  title: string
}

const componentRoots: Partial<Record<string, ElementType>> = {
  'aspect-ratio': AspectRatioUI.AspectRatio,
  'asset-row': AssetRowUI.AssetRow,
  'chat-bubble': ChatBubbleUI.ChatBubble,
  'checklist-card': ChecklistCardUI.ChecklistCard,
  chip: ChipUI.Chip,
  'feature-item': FeatureItemUI.FeatureItem,
  'holding-card': HoldingCardUI.HoldingCard,
  'icon-box': IconBoxUI.IconBox,
  'icon-button': IconButtonUI.IconButton,
  'nav-item': NavItemUI.NavItem,
  progress: ProgressUI.Progress,
  'section-panel': SectionPanelUI.SectionPanel,
  'stat-cell': StatCellUI.StatCell,
  'task-card': TaskCardUI.TaskCard,
  textarea: TextareaUI.Textarea,
  toggle: ToggleUI.Toggle,
}

const genericProps: Record<string, Record<string, unknown>> = {
  'aspect-ratio': {
    className: 'max-w-md overflow-hidden rounded-xl border border-border bg-surface-blue',
    ratio: 16 / 9,
  },
  'asset-row': {
    amount: '1.2486 ETH',
    avatar: <IconBoxUI.IconBox icon={<Wallet />} size="sm" variant="primary-soft" />,
    detail: '+4.12%',
    detailColor: 'var(--success)',
    symbol: 'ETH',
    value: '$4,286.12',
  },
  'chat-bubble': {
    className: 'max-w-md',
    variant: 'incoming',
  },
  'checklist-card': {
    action: (
      <Button size="sm" variant="secondary">
        Review
      </Button>
    ),
    description: 'Verify the recovery phrase backup before exporting access.',
    title: 'Security checklist',
    tone: 'info',
  },
  chip: {
    selected: true,
  },
  'feature-item': {
    icon: <Sparkles className="size-4" />,
  },
  'holding-card': {
    amount: '12.48',
    change: '+4.82%',
    label: 'ETH',
    pnl: '24h PnL',
    suffix: 'Available balance',
    value: '$41,280.22',
  },
  'icon-box': {
    icon: <Wallet />,
    size: 'md',
    variant: 'primary-soft',
  },
  'icon-button': {
    icon: <Search />,
    label: 'Search positions',
    size: 'md',
    variant: 'foreground',
  },
  'nav-item': {
    active: true,
    className: 'max-w-xs',
    icon: <Wallet />,
  },
  progress: {
    className: 'max-w-md',
    value: 64,
  },
  'section-panel': {
    className: 'max-w-md',
    padding: 'lg',
    variant: 'elevated',
  },
  'stat-cell': {
    label: 'Network fee',
    value: '0.00042 ETH',
  },
  'task-card': {
    actions: (
      <>
        <Button size="sm">Adjust</Button>
        <Button size="sm" variant="secondary">
          Pause
        </Button>
      </>
    ),
    progress: { label: 'Allocation', value: 64 },
    stats: [
      { label: 'APY', value: '4.8%' },
      { label: 'TVL', value: '$2.4M' },
      { label: 'Risk', value: 'Low' },
    ],
    status: <Badge variant="success">Live</Badge>,
    subtitle: 'Auto-managed strategy',
    title: 'ETH staking',
  },
  textarea: {
    className: 'min-h-[120px] max-w-md',
    defaultValue: 'This transfer is reserved for multisig approval.',
  },
  toggle: {
    'aria-label': 'Toggle analytics',
    pressed: true,
  },
}

const genericChildren: Partial<Record<string, ReactNode>> = {
  'aspect-ratio': (
    <div className="flex h-full items-center justify-center text-body-sm font-medium">
      16:9 preview canvas
    </div>
  ),
  'chat-bubble': 'Portfolio synced 2 minutes ago.',
  chip: 'Layer 2',
  'feature-item': 'Registry sync keeps source components copyable and current.',
  'nav-item': 'Portfolio',
  'section-panel': (
    <div className="grid gap-2">
      <div className="text-body-sm font-semibold">Overview</div>
      <p className="text-body-sm text-muted-foreground">
        Use panels to separate wallet summaries, actions, and status details.
      </p>
    </div>
  ),
  toggle: 'Analytics',
}

const genericCode: Record<string, string> = {
  'aspect-ratio': `import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border border-border bg-surface-blue">
      <div className="flex h-full items-center justify-center text-sm font-medium">
        16:9 preview canvas
      </div>
    </AspectRatio>
  )
}`,
  'asset-row': `import { AssetRow } from '@/components/ui/asset-row'
import { IconBox } from '@/components/ui/icon-box'
import { Wallet } from 'lucide-react'

export function AssetRowDemo() {
  return (
    <AssetRow
      avatar={<IconBox icon={<Wallet />} size="sm" variant="primary-soft" />}
      symbol="ETH"
      amount="1.2486 ETH"
      value="$4,286.12"
      detail="+4.12%"
      detailColor="var(--success)"
    />
  )
}`,
  'checklist-card': `import { ChecklistCard } from '@/components/ui/checklist-card'
import { Button } from '@/components/ui/button'

export function ChecklistCardDemo() {
  return (
    <ChecklistCard
      title="Security checklist"
      description="Verify the recovery phrase backup before exporting access."
      tone="info"
      action={<Button size="sm" variant="secondary">Review</Button>}
    />
  )
}`,
  'feature-item': `import { FeatureItem } from '@/components/ui/feature-item'
import { Sparkles } from 'lucide-react'

export function FeatureItemDemo() {
  return (
    <FeatureItem icon={<Sparkles className="size-4" />}>
      Registry sync keeps source components copyable and current.
    </FeatureItem>
  )
}`,
  'holding-card': `import { HoldingCard } from '@/components/ui/holding-card'

export function HoldingCardDemo() {
  return (
    <HoldingCard
      label="ETH"
      amount="12.48"
      suffix="Available balance"
      value="$41,280.22"
      change="+4.82%"
      pnl="24h PnL"
    />
  )
}`,
  'icon-box': `import { IconBox } from '@/components/ui/icon-box'
import { Wallet } from 'lucide-react'

export function IconBoxDemo() {
  return <IconBox icon={<Wallet />} size="md" variant="primary-soft" />
}`,
  'icon-button': `import { IconButton } from '@/components/ui/icon-button'
import { Search } from 'lucide-react'

export function IconButtonDemo() {
  return <IconButton icon={<Search />} label="Search positions" size="md" variant="foreground" />
}`,
  'nav-item': `import { NavItem } from '@/components/ui/nav-item'
import { Wallet } from 'lucide-react'

export function NavItemDemo() {
  return (
    <NavItem active icon={<Wallet />}>
      Portfolio
    </NavItem>
  )
}`,
  progress: `import { Progress } from '@/components/ui/progress'

export function ProgressDemo() {
  return <Progress value={64} />
}`,
  'section-panel': `import { SectionPanel } from '@/components/ui/section-panel'

export function SectionPanelDemo() {
  return (
    <SectionPanel variant="elevated" padding="lg">
      <div className="grid gap-2">
        <div className="text-sm font-semibold">Overview</div>
        <p className="text-sm text-muted-foreground">
          Use panels to separate wallet summaries, actions, and status details.
        </p>
      </div>
    </SectionPanel>
  )
}`,
  'stat-cell': `import { StatCell } from '@/components/ui/stat-cell'

export function StatCellDemo() {
  return <StatCell label="Network fee" value="0.00042 ETH" />
}`,
  'task-card': `import { TaskCard } from '@/components/ui/task-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function TaskCardDemo() {
  return (
    <TaskCard
      title="ETH staking"
      subtitle="Auto-managed strategy"
      status={<Badge variant="success">Live</Badge>}
      stats={[
        { label: 'APY', value: '4.8%' },
        { label: 'TVL', value: '$2.4M' },
        { label: 'Risk', value: 'Low' },
      ]}
      progress={{ label: 'Allocation', value: 64 }}
      actions={
        <>
          <Button size="sm">Adjust</Button>
          <Button size="sm" variant="secondary">Pause</Button>
        </>
      }
    />
  )
}`,
  textarea: `import { Textarea } from '@/components/ui/textarea'

export function TextareaDemo() {
  return <Textarea defaultValue="This transfer is reserved for multisig approval." className="min-h-[120px]" />
}`,
  toggle: `import { Toggle } from '@/components/ui/toggle'

export function ToggleDemo() {
  return <Toggle pressed aria-label="Toggle analytics">Analytics</Toggle>
}`,
}

function createExample(title: string, description: string, preview: ReactNode, code: string) {
  return { code, description, preview, title } satisfies ComponentDocExample
}

function createGenericExample({ componentName, displayName, primaryExport }: ExampleArgs) {
  const Component = componentRoots[componentName]

  if (!Component) {
    throw new Error(`Missing live demo coverage for ${displayName} (${componentName}).`)
  }

  return createExample(
    'Demo',
    'Live render using the copied test-token-ui source component.',
    createElement(Component, genericProps[componentName], genericChildren[componentName]),
    genericCode[componentName] ??
      `import { ${primaryExport} } from '@/components/ui/${componentName}'

export function ${primaryExport}Demo() {
  return <${primaryExport} />
}`,
  )
}

function ButtonExamples() {
  return [
    createExample(
      'Variants',
      'Primary actions, secondary actions, and lower-emphasis options should all render in place.',
      <div className="flex flex-wrap gap-3">
        <Button>Continue</Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="outline">Cancel</Button>
        <Button variant="ghost">Learn more</Button>
      </div>,
      `import { Button } from '@/components/ui/button'

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Continue</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Learn more</Button>
    </div>
  )
}`,
    ),
    createExample(
      'States',
      'Disabled and high-contrast states should be visible without leaving the docs page.',
      <div className="flex flex-wrap gap-3">
        <Button variant="foreground">Confirm</Button>
        <Button disabled>Disabled</Button>
      </div>,
      `import { Button } from '@/components/ui/button'

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="foreground">Confirm</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}`,
    ),
  ]
}

function BadgeExamples() {
  return [
    createExample(
      'Variants',
      'Badge styles should read clearly in a compact, token-heavy layout.',
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Synced</Badge>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>,
      `import { Badge } from '@/components/ui/badge'

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Synced</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
    ),
  ]
}

function InputExamples() {
  return [
    createExample(
      'States',
      'Default, invalid, and disabled input states should be visible without toggling controls.',
      <div className="grid max-w-md gap-3">
        <Input placeholder="Search token" />
        <Input aria-invalid placeholder="Invalid token" />
        <Input disabled placeholder="Disabled" />
      </div>,
      `import { Input } from '@/components/ui/input'

export function InputStatesDemo() {
  return (
    <div className="grid gap-3">
      <Input placeholder="Search token" />
      <Input aria-invalid placeholder="Invalid token" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}`,
    ),
  ]
}

function CardExamples() {
  return [
    createExample(
      'Basic',
      'Cards should render hierarchy, supporting text, and dense summary rows together.',
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
          <CardDescription>Token balances and account status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-md bg-background p-4">
            <span className="text-body-sm text-muted-foreground">Total value</span>
            <span className="font-semibold">$12,480.00</span>
          </div>
        </CardContent>
      </Card>,
      `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription>Token balances and account status.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between rounded-md bg-background p-4">
          <span className="text-sm text-muted-foreground">Total value</span>
          <span className="font-semibold">$12,480.00</span>
        </div>
      </CardContent>
    </Card>
  )
}`,
    ),
  ]
}

function AccordionExamples() {
  return [
    createExample(
      'Basic',
      'Accordion items should show real trigger and content composition, not a stand-in container.',
      <Accordion className="w-full" collapsible defaultValue="item-1" type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is source-first UI?</AccordionTrigger>
          <AccordionContent>
            Components are copied into the app so teams can adapt behavior and styling locally.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How are updates distributed?</AccordionTrigger>
          <AccordionContent>
            The CLI registry is generated from packages/ui/src before release.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
      `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is source-first UI?</AccordionTrigger>
        <AccordionContent>
          Components are copied into the app so teams can adapt behavior and styling locally.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How are updates distributed?</AccordionTrigger>
        <AccordionContent>
          The CLI registry is generated from packages/ui/src before release.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    ),
  ]
}

function AlertExamples() {
  return [
    createExample(
      'Basic',
      'Alerts should render their icon, title, and supporting description together.',
      <AlertUI.Alert className="max-w-md">
        <Sparkles className="h-4 w-4" />
        <AlertUI.AlertTitle>Registry synced</AlertUI.AlertTitle>
        <AlertUI.AlertDescription>
          Source files and generated registry output are aligned for the next release.
        </AlertUI.AlertDescription>
      </AlertUI.Alert>,
      `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Sparkles } from 'lucide-react'

export function AlertDemo() {
  return (
    <Alert>
      <Sparkles className="h-4 w-4" />
      <AlertTitle>Registry synced</AlertTitle>
      <AlertDescription>
        Source files and generated registry output are aligned for the next release.
      </AlertDescription>
    </Alert>
  )
}`,
    ),
  ]
}

function AvatarExamples() {
  return [
    createExample(
      "Fallback",
      "Avatar fallback content should still render clearly when no image is present.",
      <div className="flex items-center gap-3">
        <AvatarUI.Avatar>
          <AvatarUI.AvatarFallback>IM</AvatarUI.AvatarFallback>
        </AvatarUI.Avatar>
        <div className="grid gap-1">
          <span className="text-body-sm font-medium">Test Lab</span>
          <span className="text-caption text-muted-foreground">
            Source-first UI
          </span>
        </div>
      </div>,
      `import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>IM</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <span className="text-sm font-medium">Test Lab</span>
        <span className="text-xs text-muted-foreground">Source-first UI</span>
      </div>
    </div>
  )
}`,
    ),
  ]
}

function CheckboxExamples() {
  return [
    createExample(
      'Basic',
      'Checkbox states are easier to evaluate with their associated label and spacing.',
      <div className="flex items-center gap-3">
        <CheckboxUI.Checkbox checked id="sync-wallet" />
        <LabelUI.Label htmlFor="sync-wallet">Sync wallet positions</LabelUI.Label>
      </div>,
      `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="sync-wallet" checked />
      <Label htmlFor="sync-wallet">Sync wallet positions</Label>
    </div>
  )
}`,
    ),
  ]
}

function CollapsibleExamples() {
  return [
    createExample(
      'Basic',
      'Collapsible content should show both the trigger and expanded content area.',
      <CollapsibleUI.Collapsible className="grid w-full max-w-md gap-3" defaultOpen>
        <CollapsibleUI.CollapsibleTrigger asChild>
          <Button className="justify-between" variant="secondary">
            Release notes
            <ArrowRight className="size-4" />
          </Button>
        </CollapsibleUI.CollapsibleTrigger>
        <CollapsibleUI.CollapsibleContent className="rounded-xl border border-border bg-card p-4 text-body-sm text-muted-foreground">
          test-token-ui components stay editable after copy, so teams can adapt them without forks.
        </CollapsibleUI.CollapsibleContent>
      </CollapsibleUI.Collapsible>,
      `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CollapsibleDemo() {
  return (
    <Collapsible defaultOpen className="grid gap-3">
      <CollapsibleTrigger asChild>
        <Button variant="secondary" className="justify-between">
          Release notes
          <ArrowRight className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        test-token-ui components stay editable after copy, so teams can adapt them without forks.
      </CollapsibleContent>
    </Collapsible>
  )
}`,
    ),
  ]
}

function LabelExamples() {
  return [
    createExample(
      'Field label',
      'Labels should render in context with their associated field, not as detached text.',
      <div className="grid max-w-md gap-2">
        <LabelUI.Label htmlFor="wallet-name">Wallet label</LabelUI.Label>
        <Input id="wallet-name" placeholder="Primary account" />
      </div>,
      `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LabelDemo() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="wallet-name">Wallet label</Label>
      <Input id="wallet-name" placeholder="Primary account" />
    </div>
  )
}`,
    ),
  ]
}

function SeparatorExamples() {
  return [
    createExample(
      'Horizontal',
      'Separators should be shown between actual pieces of content to judge spacing and emphasis.',
      <div className="grid max-w-md gap-3">
        <div className="text-body-sm font-medium">Overview</div>
        <SeparatorUI.Separator />
        <div className="text-body-sm text-muted-foreground">Performance</div>
      </div>,
      `import { Separator } from '@/components/ui/separator'

export function SeparatorDemo() {
  return (
    <div className="grid gap-3">
      <div className="text-sm font-medium">Overview</div>
      <Separator />
      <div className="text-sm text-muted-foreground">Performance</div>
    </div>
  )
}`,
    ),
  ]
}

function SkeletonExamples() {
  return [
    createExample(
      'Loading state',
      'Skeletons are only meaningful when they mirror a plausible layout.',
      <div className="grid max-w-md gap-3">
        <SkeletonUI.Skeleton className="h-6 w-40 rounded-xl" />
        <SkeletonUI.Skeleton className="h-4 w-full rounded-xl" />
        <SkeletonUI.Skeleton className="h-4 w-2/3 rounded-xl" />
      </div>,
      `import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonDemo() {
  return (
    <div className="grid gap-3">
      <Skeleton className="h-6 w-40 rounded-xl" />
      <Skeleton className="h-4 w-full rounded-xl" />
      <Skeleton className="h-4 w-2/3 rounded-xl" />
    </div>
  )
}`,
    ),
  ]
}

function SliderExamples() {
  return [
    createExample(
      'Basic',
      'Slider position should be visible on a real track instead of inferred from props alone.',
      <div className="grid max-w-md gap-3">
        <div className="flex items-center justify-between text-body-sm">
          <span className="text-muted-foreground">Allocation</span>
          <span className="font-medium">48%</span>
        </div>
        <SliderUI.Slider defaultValue={[48]} max={100} step={1} />
      </div>,
      `import { Slider } from '@/components/ui/slider'

export function SliderDemo() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Allocation</span>
        <span className="font-medium">48%</span>
      </div>
      <Slider defaultValue={[48]} max={100} step={1} />
    </div>
  )
}`,
    ),
  ]
}

function SwitchExamples() {
  return [
    createExample(
      'Basic',
      'Switches should be previewed together with their text label and enabled state.',
      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-4 py-3 max-w-md">
        <div className="grid gap-1">
          <span className="text-body-sm font-medium">Biometric unlock</span>
          <span className="text-caption text-muted-foreground">Use Face ID for quick access.</span>
        </div>
        <SwitchUI.Switch defaultChecked />
      </div>,
      `import { Switch } from '@/components/ui/switch'

export function SwitchDemo() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-4 py-3">
      <div className="grid gap-1">
        <span className="text-sm font-medium">Biometric unlock</span>
        <span className="text-xs text-muted-foreground">Use Face ID for quick access.</span>
      </div>
      <Switch defaultChecked />
    </div>
  )
}`,
    ),
  ]
}

function ToggleGroupExamples() {
  return [
    createExample(
      'Single selection',
      'Toggle groups should show adjacent items and an active state in a single render.',
      <ToggleGroupUI.ToggleGroup defaultValue="overview" type="single">
        <ToggleGroupUI.ToggleGroupItem value="overview">Overview</ToggleGroupUI.ToggleGroupItem>
        <ToggleGroupUI.ToggleGroupItem value="activity">Activity</ToggleGroupUI.ToggleGroupItem>
        <ToggleGroupUI.ToggleGroupItem value="settings">Settings</ToggleGroupUI.ToggleGroupItem>
      </ToggleGroupUI.ToggleGroup>,
      `import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="overview">
      <ToggleGroupItem value="overview">Overview</ToggleGroupItem>
      <ToggleGroupItem value="activity">Activity</ToggleGroupItem>
      <ToggleGroupItem value="settings">Settings</ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    ),
  ]
}

function AlertDialogExamples() {
  return [
    createExample(
      'Confirmation',
      'Alert dialogs should expose their trigger and destructive confirmation structure.',
      <AlertDialogUI.AlertDialog>
        <AlertDialogUI.AlertDialogTrigger asChild>
          <Button variant="destructive">Delete key</Button>
        </AlertDialogUI.AlertDialogTrigger>
        <AlertDialogUI.AlertDialogContent>
          <AlertDialogUI.AlertDialogHeader>
            <AlertDialogUI.AlertDialogTitle>Delete this key?</AlertDialogUI.AlertDialogTitle>
            <AlertDialogUI.AlertDialogDescription>
              This action cannot be undone and will remove local access immediately.
            </AlertDialogUI.AlertDialogDescription>
          </AlertDialogUI.AlertDialogHeader>
          <AlertDialogUI.AlertDialogFooter>
            <AlertDialogUI.AlertDialogCancel>Cancel</AlertDialogUI.AlertDialogCancel>
            <AlertDialogUI.AlertDialogAction>Delete</AlertDialogUI.AlertDialogAction>
          </AlertDialogUI.AlertDialogFooter>
        </AlertDialogUI.AlertDialogContent>
      </AlertDialogUI.AlertDialog>,
      `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete key</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this key?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone and will remove local access immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
    ),
  ]
}

function BreadcrumbExamples() {
  return [
    createExample(
      'Hierarchy',
      'Breadcrumbs should show page hierarchy with real list, link, and current-page elements.',
      <BreadcrumbUI.Breadcrumb>
        <BreadcrumbUI.BreadcrumbList>
          <BreadcrumbUI.BreadcrumbItem>
            <BreadcrumbUI.BreadcrumbLink href="#/docs">Docs</BreadcrumbUI.BreadcrumbLink>
          </BreadcrumbUI.BreadcrumbItem>
          <BreadcrumbUI.BreadcrumbSeparator />
          <BreadcrumbUI.BreadcrumbItem>
            <BreadcrumbUI.BreadcrumbLink href="#/docs/components">Components</BreadcrumbUI.BreadcrumbLink>
          </BreadcrumbUI.BreadcrumbItem>
          <BreadcrumbUI.BreadcrumbSeparator />
          <BreadcrumbUI.BreadcrumbItem>
            <BreadcrumbUI.BreadcrumbPage>Button</BreadcrumbUI.BreadcrumbPage>
          </BreadcrumbUI.BreadcrumbItem>
        </BreadcrumbUI.BreadcrumbList>
      </BreadcrumbUI.Breadcrumb>,
      `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Button</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    ),
  ]
}

function CarouselExamples() {
  return [
    createExample(
      'Slides',
      'Carousel docs should include real slide items and navigation controls.',
      <CarouselUI.Carousel className="w-full max-w-md">
        <CarouselUI.CarouselContent>
          {['Overview', 'Performance', 'Security'].map((label) => (
            <CarouselUI.CarouselItem key={label}>
              <div className="rounded-xl border border-border bg-card p-6 text-body-sm font-medium">
                {label}
              </div>
            </CarouselUI.CarouselItem>
          ))}
        </CarouselUI.CarouselContent>
        <CarouselUI.CarouselPrevious />
        <CarouselUI.CarouselNext />
      </CarouselUI.Carousel>,
      `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {['Overview', 'Performance', 'Security'].map((label) => (
          <CarouselItem key={label}>
            <div className="rounded-xl border border-border bg-card p-6 text-sm font-medium">{label}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    ),
  ]
}

function CalendarExamples() {
  return [
    createExample(
      'Single date',
      'Calendar selection should be rendered directly so spacing and cell affordance are visible.',
      <CalendarUI.Calendar mode="single" selected={new Date('2026-05-05')} className="rounded-xl border border-border bg-card p-3" />,
      `import { Calendar } from '@/components/ui/calendar'

export function CalendarDemo() {
  return <Calendar mode="single" selected={new Date('2026-05-05')} />
}`,
    ),
  ]
}

function ChartExamples() {
  const chartData = [
    { month: 'Jan', volume: 180 },
    { month: 'Feb', volume: 220 },
    { month: 'Mar', volume: 260 },
    { month: 'Apr', volume: 240 },
  ]

  return [
    createExample(
      'Bar chart',
      'Charts need real data, axes, and tooltips to evaluate spacing and token usage.',
      <ChartUI.ChartContainer
        className="h-[240px] w-full max-w-xl"
        config={{ volume: { color: 'var(--primary)', label: 'Volume' } }}
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={8} />
          <ChartUI.ChartTooltip content={<ChartUI.ChartTooltipContent />} cursor={false} />
          <Bar dataKey="volume" fill="var(--color-volume)" radius={10} />
        </BarChart>
      </ChartUI.ChartContainer>,
      `import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const data = [
  { month: 'Jan', volume: 180 },
  { month: 'Feb', volume: 220 },
  { month: 'Mar', volume: 260 },
  { month: 'Apr', volume: 240 },
]

export function ChartDemo() {
  return (
    <ChartContainer config={{ volume: { color: 'var(--primary)', label: 'Volume' } }} className="h-[240px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Bar dataKey="volume" fill="var(--color-volume)" radius={10} />
      </BarChart>
    </ChartContainer>
  )
}`,
    ),
  ]
}

function ChatBubbleExamples() {
  return [
    createExample(
      'Conversation states',
      'Incoming and outgoing messages should be previewed together to compare tone and emphasis.',
      <div className="grid max-w-md gap-3">
        <ChatBubbleUI.ChatBubble variant="incoming">Wallet sync completed successfully.</ChatBubbleUI.ChatBubble>
        <ChatBubbleUI.ChatBubble className="justify-self-end" variant="outgoing">
          Send the next registry build.
        </ChatBubbleUI.ChatBubble>
      </div>,
      `import { ChatBubble } from '@/components/ui/chat-bubble'

export function ChatBubbleDemo() {
  return (
    <div className="grid gap-3">
      <ChatBubble variant="incoming">Wallet sync completed successfully.</ChatBubble>
      <ChatBubble variant="outgoing" className="justify-self-end">
        Send the next registry build.
      </ChatBubble>
    </div>
  )
}`,
    ),
  ]
}

function ChipExamples() {
  return [
    createExample(
      'Selection states',
      'Chip pages should show both idle and selected states in one view.',
      <div className="flex flex-wrap gap-3">
        <ChipUI.Chip>All assets</ChipUI.Chip>
        <ChipUI.Chip selected>Watchlist</ChipUI.Chip>
      </div>,
      `import { Chip } from '@/components/ui/chip'

export function ChipDemo() {
  return (
    <div className="flex gap-3">
      <Chip>All assets</Chip>
      <Chip selected>Watchlist</Chip>
    </div>
  )
}`,
    ),
  ]
}

function CommandExamples() {
  return [
    createExample(
      'Search list',
      'Command should show input, grouping, and empty-space handling in the docs.',
      <CommandUI.Command className="max-w-md rounded-xl border border-border bg-card">
        <CommandUI.CommandInput placeholder="Search commands..." />
        <CommandUI.CommandList>
          <CommandUI.CommandGroup heading="Quick actions">
            <CommandUI.CommandItem>Open portfolio</CommandUI.CommandItem>
            <CommandUI.CommandItem>Switch network</CommandUI.CommandItem>
            <CommandUI.CommandItem>Copy wallet address</CommandUI.CommandItem>
          </CommandUI.CommandGroup>
        </CommandUI.CommandList>
      </CommandUI.Command>,
      `import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

export function CommandDemo() {
  return (
    <Command>
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandGroup heading="Quick actions">
          <CommandItem>Open portfolio</CommandItem>
          <CommandItem>Switch network</CommandItem>
          <CommandItem>Copy wallet address</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
    ),
  ]
}

function ContextMenuExamples() {
  return [
    createExample(
      'Right click',
      'Context menus should render the trigger area together with actual menu items.',
      <ContextMenuUI.ContextMenu>
        <ContextMenuUI.ContextMenuTrigger className="flex h-28 max-w-md items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 text-body-sm text-muted-foreground">
          Right click this surface
        </ContextMenuUI.ContextMenuTrigger>
        <ContextMenuUI.ContextMenuContent>
          <ContextMenuUI.ContextMenuItem>Duplicate</ContextMenuUI.ContextMenuItem>
          <ContextMenuUI.ContextMenuItem>Share</ContextMenuUI.ContextMenuItem>
          <ContextMenuUI.ContextMenuSeparator />
          <ContextMenuUI.ContextMenuItem>Archive</ContextMenuUI.ContextMenuItem>
        </ContextMenuUI.ContextMenuContent>
      </ContextMenuUI.ContextMenu>,
      `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 text-sm text-muted-foreground">
        Right click this surface
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
    ),
  ]
}

function DialogExamples() {
  return [
    createExample(
      "Basic",
      "Dialogs should show a real trigger and content composition, not just the container export.",
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="foreground">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ready to customize</DialogTitle>
            <DialogDescription>
              Components are copied into the app while preserving the design
              system.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
      `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="foreground">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ready to customize</DialogTitle>
          <DialogDescription>
            Components are copied into the app while preserving the design system.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
    ),
  ]
}

function DrawerExamples() {
  return [
    createExample(
      'Bottom drawer',
      'Drawers need the full trigger and content pattern to be useful as documentation.',
      <DrawerUI.Drawer>
        <DrawerUI.DrawerTrigger asChild>
          <Button variant="secondary">Open drawer</Button>
        </DrawerUI.DrawerTrigger>
        <DrawerUI.DrawerContent>
          <DrawerUI.DrawerHeader>
            <DrawerUI.DrawerTitle>Confirm transaction</DrawerUI.DrawerTitle>
            <DrawerUI.DrawerDescription>
              Review the wallet address, gas estimate, and nonce before submitting.
            </DrawerUI.DrawerDescription>
          </DrawerUI.DrawerHeader>
        </DrawerUI.DrawerContent>
      </DrawerUI.Drawer>,
      `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Confirm transaction</DrawerTitle>
          <DrawerDescription>
            Review the wallet address, gas estimate, and nonce before submitting.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}`,
    ),
  ]
}

function DropdownMenuExamples() {
  return [
    createExample(
      'Actions',
      'Dropdown menus should render the trigger and menu items together.',
      <DropdownMenuUI.DropdownMenu>
        <DropdownMenuUI.DropdownMenuTrigger asChild>
          <Button variant="secondary">Open menu</Button>
        </DropdownMenuUI.DropdownMenuTrigger>
        <DropdownMenuUI.DropdownMenuContent>
          <DropdownMenuUI.DropdownMenuItem>Copy address</DropdownMenuUI.DropdownMenuItem>
          <DropdownMenuUI.DropdownMenuItem>Rename wallet</DropdownMenuUI.DropdownMenuItem>
          <DropdownMenuUI.DropdownMenuSeparator />
          <DropdownMenuUI.DropdownMenuItem>Archive</DropdownMenuUI.DropdownMenuItem>
        </DropdownMenuUI.DropdownMenuContent>
      </DropdownMenuUI.DropdownMenu>,
      `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Copy address</DropdownMenuItem>
        <DropdownMenuItem>Rename wallet</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    ),
  ]
}

function FormExamples() {
  return [
    createExample(
      'Field composition',
      'Forms should demonstrate real label, control, and helper text composition.',
      <FormDemo />,
      `import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

export function FormDemo() {
  const form = useForm({ defaultValues: { wallet: 'Primary account' } })

  return (
    <Form {...form}>
      <form className="grid max-w-md gap-4" onSubmit={(event) => event.preventDefault()}>
        <FormField
          control={form.control}
          name="wallet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wallet label</FormLabel>
              <FormControl>
                <Input placeholder="Primary account" {...field} />
              </FormControl>
              <FormDescription>Shown in portfolio and activity views.</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}`,
    ),
  ]
}

function HoverCardExamples() {
  return [
    createExample(
      "Basic",
      "Hover cards should document both their trigger and the surfaced content.",
      <HoverCardUI.HoverCard>
        <HoverCardUI.HoverCardTrigger asChild>
          <Button variant="link">Open profile</Button>
        </HoverCardUI.HoverCardTrigger>
        <HoverCardUI.HoverCardContent className="w-72">
          <div className="grid gap-1">
            <span className="text-body-sm font-medium">Test Lab</span>
            <span className="text-caption text-muted-foreground">
              Source-first UI workflows
            </span>
          </div>
        </HoverCardUI.HoverCardContent>
      </HoverCardUI.HoverCard>,
      `import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Open profile</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="grid gap-1">
          <span className="text-sm font-medium">Test Lab</span>
          <span className="text-xs text-muted-foreground">Source-first UI workflows</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`,
    ),
  ]
}

function InputOtpExamples() {
  return [
    createExample(
      'One-time code',
      'Input OTP should render real slots so focus and spacing are visible.',
      <InputOtpUI.InputOTP defaultValue="4827" maxLength={4}>
        <InputOtpUI.InputOTPGroup>
          <InputOtpUI.InputOTPSlot index={0} />
          <InputOtpUI.InputOTPSlot index={1} />
          <InputOtpUI.InputOTPSlot index={2} />
          <InputOtpUI.InputOTPSlot index={3} />
        </InputOtpUI.InputOTPGroup>
      </InputOtpUI.InputOTP>,
      `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

export function InputOtpDemo() {
  return (
    <InputOTP maxLength={4} defaultValue="4827">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,
    ),
  ]
}

function MenubarExamples() {
  return [
    createExample(
      'Desktop menu',
      'Menubars should show a real menu structure, not just the root shell.',
      <MenubarUI.Menubar>
        <MenubarUI.MenubarMenu>
          <MenubarUI.MenubarTrigger>Wallet</MenubarUI.MenubarTrigger>
          <MenubarUI.MenubarContent>
            <MenubarUI.MenubarItem>New wallet</MenubarUI.MenubarItem>
            <MenubarUI.MenubarItem>Import seed phrase</MenubarUI.MenubarItem>
          </MenubarUI.MenubarContent>
        </MenubarUI.MenubarMenu>
        <MenubarUI.MenubarMenu>
          <MenubarUI.MenubarTrigger>Settings</MenubarUI.MenubarTrigger>
          <MenubarUI.MenubarContent>
            <MenubarUI.MenubarItem>Preferences</MenubarUI.MenubarItem>
            <MenubarUI.MenubarItem>Security</MenubarUI.MenubarItem>
          </MenubarUI.MenubarContent>
        </MenubarUI.MenubarMenu>
      </MenubarUI.Menubar>,
      `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Wallet</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New wallet</MenubarItem>
          <MenubarItem>Import seed phrase</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Preferences</MenubarItem>
          <MenubarItem>Security</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
    ),
  ]
}

function NavigationMenuExamples() {
  return [
    createExample(
      'Linked content',
      'Navigation menus should include their trigger, content, and viewport behavior.',
      <NavigationMenuUI.NavigationMenu>
        <NavigationMenuUI.NavigationMenuList>
          <NavigationMenuUI.NavigationMenuItem>
            <NavigationMenuUI.NavigationMenuTrigger>Products</NavigationMenuUI.NavigationMenuTrigger>
            <NavigationMenuUI.NavigationMenuContent>
              <div className="grid gap-1 p-4 sm:w-[320px]">
                <span className="text-body-sm font-medium">Wallet Suite</span>
                <span className="text-caption text-muted-foreground">
                  Source-first primitives and patterns for token-centric interfaces.
                </span>
              </div>
            </NavigationMenuUI.NavigationMenuContent>
          </NavigationMenuUI.NavigationMenuItem>
        </NavigationMenuUI.NavigationMenuList>
      </NavigationMenuUI.NavigationMenu>,
      `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-1 p-4 sm:w-[320px]">
              <span className="text-sm font-medium">Wallet Suite</span>
              <span className="text-xs text-muted-foreground">
                Source-first primitives and patterns for token-centric interfaces.
              </span>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
    ),
  ]
}

function PaginationExamples() {
  return [
    createExample(
      'Pages',
      'Pagination previews should show active links and surrounding page items.',
      <PaginationUI.Pagination>
        <PaginationUI.PaginationContent>
          <PaginationUI.PaginationItem>
            <PaginationUI.PaginationLink href="#">1</PaginationUI.PaginationLink>
          </PaginationUI.PaginationItem>
          <PaginationUI.PaginationItem>
            <PaginationUI.PaginationLink href="#" isActive>
              2
            </PaginationUI.PaginationLink>
          </PaginationUI.PaginationItem>
          <PaginationUI.PaginationItem>
            <PaginationUI.PaginationLink href="#">3</PaginationUI.PaginationLink>
          </PaginationUI.PaginationItem>
        </PaginationUI.PaginationContent>
      </PaginationUI.Pagination>,
      `import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
    ),
  ]
}

function PopoverExamples() {
  return [
    createExample(
      'Inline detail',
      'Popovers should show both the anchored trigger and the surface that opens from it.',
      <PopoverUI.Popover>
        <PopoverUI.PopoverTrigger asChild>
          <Button variant="secondary">Open popover</Button>
        </PopoverUI.PopoverTrigger>
        <PopoverUI.PopoverContent className="w-72">
          <div className="grid gap-1">
            <span className="text-body-sm font-medium">Gas estimate</span>
            <span className="text-caption text-muted-foreground">Network fees update every few seconds.</span>
          </div>
        </PopoverUI.PopoverContent>
      </PopoverUI.Popover>,
      `import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid gap-1">
          <span className="text-sm font-medium">Gas estimate</span>
          <span className="text-xs text-muted-foreground">Network fees update every few seconds.</span>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
    ),
  ]
}

function RadioGroupExamples() {
  return [
    createExample(
      'Single choice',
      'Radio groups should show at least two options with their labels.',
      <RadioGroupUI.RadioGroup className="grid gap-3" defaultValue="fast">
        <div className="flex items-center gap-3">
          <RadioGroupUI.RadioGroupItem id="speed-fast" value="fast" />
          <LabelUI.Label htmlFor="speed-fast">Fast confirmation</LabelUI.Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupUI.RadioGroupItem id="speed-standard" value="standard" />
          <LabelUI.Label htmlFor="speed-standard">Standard confirmation</LabelUI.Label>
        </div>
      </RadioGroupUI.RadioGroup>,
      `import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="fast" className="grid gap-3">
      <div className="flex items-center gap-3">
        <RadioGroupItem id="speed-fast" value="fast" />
        <Label htmlFor="speed-fast">Fast confirmation</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="speed-standard" value="standard" />
        <Label htmlFor="speed-standard">Standard confirmation</Label>
      </div>
    </RadioGroup>
  )
}`,
    ),
  ]
}

function ResizableExamples() {
  return [
    createExample(
      'Two panels',
      'Resizable groups should show both panels and the drag handle in the docs.',
      <div className="h-[220px] w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card">
        <ResizableUI.ResizablePanelGroup direction="horizontal">
          <ResizableUI.ResizablePanel defaultSize={55}>
            <div className="flex h-full items-center justify-center text-body-sm font-medium">Portfolio</div>
          </ResizableUI.ResizablePanel>
          <ResizableUI.ResizableHandle withHandle />
          <ResizableUI.ResizablePanel>
            <div className="flex h-full items-center justify-center text-body-sm text-muted-foreground">Activity</div>
          </ResizableUI.ResizablePanel>
        </ResizableUI.ResizablePanelGroup>
      </div>,
      `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export function ResizableDemo() {
  return (
    <div className="h-[220px] overflow-hidden rounded-xl border border-border bg-card">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={55}>
          <div className="flex h-full items-center justify-center text-sm font-medium">Portfolio</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Activity</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
    ),
  ]
}

function ScrollAreaExamples() {
  return [
    createExample(
      'Scrollable list',
      'Scroll areas should demonstrate overflow and custom scrollbar treatment.',
      <ScrollAreaUI.ScrollArea className="h-48 w-full max-w-md rounded-xl border border-border bg-card">
        <div className="grid gap-2 p-4">
          {Array.from({ length: 12 }, (_, index) => (
            <div className="rounded-lg bg-background px-3 py-2 text-body-sm" key={index}>
              Token row {index + 1}
            </div>
          ))}
        </div>
        <ScrollAreaUI.ScrollBar orientation="vertical" />
      </ScrollAreaUI.ScrollArea>,
      `import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 rounded-xl border border-border bg-card">
      <div className="grid gap-2 p-4">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="rounded-lg bg-background px-3 py-2 text-sm">
            Token row {index + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}`,
    ),
  ]
}

function SelectExamples() {
  return [
    createExample(
      'Single select',
      'Select should render its trigger and choice list in a real composition.',
      <SelectUI.Select defaultValue="eth">
        <SelectUI.SelectTrigger className="max-w-md">
          <SelectUI.SelectValue placeholder="Choose token" />
        </SelectUI.SelectTrigger>
        <SelectUI.SelectContent>
          <SelectUI.SelectItem value="eth">ETH</SelectUI.SelectItem>
          <SelectUI.SelectItem value="btc">BTC</SelectUI.SelectItem>
          <SelectUI.SelectItem value="usdt">USDT</SelectUI.SelectItem>
        </SelectUI.SelectContent>
      </SelectUI.Select>,
      `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectDemo() {
  return (
    <Select defaultValue="eth">
      <SelectTrigger>
        <SelectValue placeholder="Choose token" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="eth">ETH</SelectItem>
        <SelectItem value="btc">BTC</SelectItem>
        <SelectItem value="usdt">USDT</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
    ),
  ]
}

function SheetExamples() {
  return [
    createExample(
      'Side sheet',
      'Sheets should document their trigger and side-mounted content structure.',
      <SheetUI.Sheet>
        <SheetUI.SheetTrigger asChild>
          <Button variant="secondary">Open sheet</Button>
        </SheetUI.SheetTrigger>
        <SheetUI.SheetContent>
          <SheetUI.SheetHeader>
            <SheetUI.SheetTitle>Wallet settings</SheetUI.SheetTitle>
            <SheetUI.SheetDescription>
              Review notification preferences, biometrics, and default network selection.
            </SheetUI.SheetDescription>
          </SheetUI.SheetHeader>
        </SheetUI.SheetContent>
      </SheetUI.Sheet>,
      `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Wallet settings</SheetTitle>
          <SheetDescription>
            Review notification preferences, biometrics, and default network selection.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`,
    ),
  ]
}

function SidebarExamples() {
  return [
    createExample(
      'Application layout',
      'Sidebar docs should show a real provider and shell layout, not just the context wrapper.',
      <SidebarUI.SidebarProvider className="min-h-[320px] overflow-hidden rounded-xl border border-border bg-background">
        <SidebarUI.Sidebar collapsible="none" className="h-auto min-h-[320px]">
          <SidebarUI.SidebarHeader>
            <div className="rounded-lg bg-sidebar-accent px-3 py-2 text-sm font-medium text-sidebar-accent-foreground">
              Wallet suite
            </div>
          </SidebarUI.SidebarHeader>
          <SidebarUI.SidebarContent>
            <div className="grid gap-1 px-2">
              <NavItemUI.NavItem active icon={<Wallet />}>
                Portfolio
              </NavItemUI.NavItem>
              <NavItemUI.NavItem icon={<Sparkles />}>Automation</NavItemUI.NavItem>
            </div>
          </SidebarUI.SidebarContent>
        </SidebarUI.Sidebar>
        <SidebarUI.SidebarInset className="min-h-[320px] p-6">
          <div className="grid gap-2">
            <span className="text-body-sm font-semibold">Main content</span>
            <span className="text-caption text-muted-foreground">Sidebar content stays visible while the main view remains editable.</span>
          </div>
        </SidebarUI.SidebarInset>
      </SidebarUI.SidebarProvider>,
      `import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { NavItem } from '@/components/ui/nav-item'
import { Sparkles, Wallet } from 'lucide-react'

export function SidebarDemo() {
  return (
    <SidebarProvider className="min-h-[320px] overflow-hidden rounded-xl border border-border bg-background">
      <Sidebar collapsible="none" className="h-auto min-h-[320px]">
        <SidebarHeader>
          <div className="rounded-lg bg-sidebar-accent px-3 py-2 text-sm font-medium text-sidebar-accent-foreground">
            Wallet suite
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="grid gap-1 px-2">
            <NavItem active icon={<Wallet />}>Portfolio</NavItem>
            <NavItem icon={<Sparkles />}>Automation</NavItem>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="min-h-[320px] p-6">
        <div className="grid gap-2">
          <span className="text-sm font-semibold">Main content</span>
          <span className="text-xs text-muted-foreground">Sidebar content stays visible while the main view remains editable.</span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`,
    ),
  ]
}

function SonnerExamples() {
  return [
    createExample(
      'Toast provider',
      'The sonner page should show the mounted toaster and an actual trigger path.',
      <ToastTriggerDemo kind="sonner" />,
      `import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from '@/components/ui/toast'

export function SonnerDemo() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast.success('Saved wallet preferences')}>Show success toast</Button>
    </>
  )
}`,
    ),
  ]
}

function StepCardExamples() {
  return [
    createExample(
      "Progress states",
      "Step cards are most useful when pending, active, and completed states are visible together.",
      <div className="grid gap-3 max-w-md">
        <StepCardUI.StepCard
          detail="Review tokens, spacing, and component variants before adding new UI."
          icon={<ShieldCheck className="size-5" />}
          label="Review rules"
          state="completed"
        />
        <StepCardUI.StepCard
          detail="Copy component source into the target app with the CLI."
          icon={<Wallet className="size-5" />}
          label="Add component"
          state="active"
        />
        <StepCardUI.StepCard
          detail="Verify token usage and responsive behavior in docs."
          icon={<Sparkles className="size-5" />}
          label="Review output"
          state="pending"
        />
      </div>,
      `import { StepCard } from '@/components/ui/step-card'
import { ShieldCheck, Sparkles, Wallet } from 'lucide-react'

export function StepCardDemo() {
  return (
    <div className="grid gap-3">
      <StepCard
        label="Review rules"
        detail="Review tokens, spacing, and component variants before adding new UI."
        icon={<ShieldCheck className="size-5" />}
        state="completed"
      />
      <StepCard
        label="Add component"
        detail="Copy component source into the target app with the CLI."
        icon={<Wallet className="size-5" />}
        state="active"
      />
      <StepCard
        label="Review output"
        detail="Verify token usage and responsive behavior in docs."
        icon={<Sparkles className="size-5" />}
        state="pending"
      />
    </div>
  )
}`,
    ),
  ]
}

function TableExamples() {
  return [
    createExample(
      'Rows and columns',
      'Table previews should include header, body, and realistic cell content.',
      <div className="w-full max-w-xl rounded-xl border border-border bg-card px-4 py-3">
        <TableUI.Table>
          <TableUI.TableHeader>
            <TableUI.TableRow>
              <TableUI.TableHead>Asset</TableUI.TableHead>
              <TableUI.TableHead>Balance</TableUI.TableHead>
              <TableUI.TableHead>Value</TableUI.TableHead>
            </TableUI.TableRow>
          </TableUI.TableHeader>
          <TableUI.TableBody>
            <TableUI.TableRow>
              <TableUI.TableCell>ETH</TableUI.TableCell>
              <TableUI.TableCell>1.2486</TableUI.TableCell>
              <TableUI.TableCell>$4,286.12</TableUI.TableCell>
            </TableUI.TableRow>
            <TableUI.TableRow>
              <TableUI.TableCell>BTC</TableUI.TableCell>
              <TableUI.TableCell>0.1831</TableUI.TableCell>
              <TableUI.TableCell>$11,742.80</TableUI.TableCell>
            </TableUI.TableRow>
          </TableUI.TableBody>
        </TableUI.Table>
      </div>,
      `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>ETH</TableCell>
          <TableCell>1.2486</TableCell>
          <TableCell>$4,286.12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>BTC</TableCell>
          <TableCell>0.1831</TableCell>
          <TableCell>$11,742.80</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    ),
  ]
}

function TabsExamples() {
  return [
    createExample(
      'Tab content',
      'Tabs should document both the active trigger row and a content panel.',
      <TabsUI.Tabs className="w-full max-w-md" defaultValue="overview">
        <TabsUI.TabsList>
          <TabsUI.TabsTrigger value="overview">Overview</TabsUI.TabsTrigger>
          <TabsUI.TabsTrigger value="activity">Activity</TabsUI.TabsTrigger>
        </TabsUI.TabsList>
        <TabsUI.TabsContent className="rounded-xl border border-border bg-card p-4 text-body-sm text-muted-foreground" value="overview">
          Wallet exposure, token balances, and network health.
        </TabsUI.TabsContent>
        <TabsUI.TabsContent className="rounded-xl border border-border bg-card p-4 text-body-sm text-muted-foreground" value="activity">
          Transfers, approvals, and signature requests.
        </TabsUI.TabsContent>
      </TabsUI.Tabs>,
      `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        Wallet exposure, token balances, and network health.
      </TabsContent>
      <TabsContent value="activity" className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        Transfers, approvals, and signature requests.
      </TabsContent>
    </Tabs>
  )
}`,
    ),
  ]
}

function ToastExamples() {
  return [
    createExample(
      'Function trigger',
      'Toast docs should show the trigger function together with the mounted toaster.',
      <ToastTriggerDemo kind="toast" />,
      `import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from '@/components/ui/toast'

export function ToastDemo() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast('Saved wallet preferences')}>Show toast</Button>
    </>
  )
}`,
    ),
  ]
}

function TooltipExamples() {
  return [
    createExample(
      'Inline hint',
      'Tooltip docs should render a trigger element and the mounted provider structure.',
      <TooltipUI.TooltipProvider>
        <TooltipUI.Tooltip>
          <TooltipUI.TooltipTrigger asChild>
            <Button variant="secondary">Hover target</Button>
          </TooltipUI.TooltipTrigger>
          <TooltipUI.TooltipContent>Gas estimate refreshes automatically.</TooltipUI.TooltipContent>
        </TooltipUI.Tooltip>
      </TooltipUI.TooltipProvider>,
      `import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover target</Button>
        </TooltipTrigger>
        <TooltipContent>Gas estimate refreshes automatically.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    ),
  ]
}

function ActionBarExamples() {
  return [
    createExample(
      'Primary and secondary actions',
      'Action bar docs should show a real cluster of token-centric quick actions.',
      <ActionBarUI.ActionBar columns={2} className="max-w-md">
        <ActionBarUI.ActionButton icon={<Wallet />} variant="primary">
          Receive
        </ActionBarUI.ActionButton>
        <ActionBarUI.ActionButton icon={<ArrowRight />} variant="secondary">
          Send
        </ActionBarUI.ActionButton>
      </ActionBarUI.ActionBar>,
      `import { ActionBar, ActionButton } from '@/components/ui/action-bar'
import { ArrowRight, Wallet } from 'lucide-react'

export function ActionBarDemo() {
  return (
    <ActionBar columns={2}>
      <ActionButton icon={<Wallet />} variant="primary">Receive</ActionButton>
      <ActionButton icon={<ArrowRight />} variant="secondary">Send</ActionButton>
    </ActionBar>
  )
}`,
    ),
  ]
}

function BottomSheetModalExamples() {
  return [
    createExample(
      'Controlled sheet',
      'Bottom sheet docs should show the real controlled trigger path used by the component.',
      <BottomSheetModalDemo />,
      `import { Button } from '@/components/ui/button'
import { BottomSheetModal } from '@/components/ui/bottom-sheet-modal'
import { useState } from 'react'

export function BottomSheetModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open bottom sheet</Button>
      <BottomSheetModal
        open={open}
        onOpenChange={setOpen}
        title="Move funds"
        description="Review the destination address and fee before confirming."
      >
        <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
          Signers and gas details render inside the sheet body.
        </div>
      </BottomSheetModal>
    </>
  )
}`,
    ),
  ]
}

export function getComponentExamples(args: ExampleArgs): ComponentDocExample[] {
  switch (args.componentName) {
    case 'accordion':
      return AccordionExamples()
    case 'action-bar':
      return ActionBarExamples()
    case 'alert':
      return AlertExamples()
    case 'alert-dialog':
      return AlertDialogExamples()
    case 'avatar':
      return AvatarExamples()
    case 'badge':
      return BadgeExamples()
    case 'bottom-sheet-modal':
      return BottomSheetModalExamples()
    case 'breadcrumb':
      return BreadcrumbExamples()
    case 'button':
      return ButtonExamples()
    case 'calendar':
      return CalendarExamples()
    case 'card':
      return CardExamples()
    case 'carousel':
      return CarouselExamples()
    case 'chart':
      return ChartExamples()
    case 'chat-bubble':
      return ChatBubbleExamples()
    case 'checkbox':
      return CheckboxExamples()
    case 'chip':
      return ChipExamples()
    case 'collapsible':
      return CollapsibleExamples()
    case 'command':
      return CommandExamples()
    case 'context-menu':
      return ContextMenuExamples()
    case 'dialog':
      return DialogExamples()
    case 'drawer':
      return DrawerExamples()
    case 'dropdown-menu':
      return DropdownMenuExamples()
    case 'form':
      return FormExamples()
    case 'hover-card':
      return HoverCardExamples()
    case 'input':
      return InputExamples()
    case 'input-otp':
      return InputOtpExamples()
    case 'label':
      return LabelExamples()
    case 'menubar':
      return MenubarExamples()
    case 'navigation-menu':
      return NavigationMenuExamples()
    case 'pagination':
      return PaginationExamples()
    case 'popover':
      return PopoverExamples()
    case 'radio-group':
      return RadioGroupExamples()
    case 'resizable':
      return ResizableExamples()
    case 'scroll-area':
      return ScrollAreaExamples()
    case 'select':
      return SelectExamples()
    case 'separator':
      return SeparatorExamples()
    case 'sheet':
      return SheetExamples()
    case 'sidebar':
      return SidebarExamples()
    case 'skeleton':
      return SkeletonExamples()
    case 'slider':
      return SliderExamples()
    case 'sonner':
      return SonnerExamples()
    case 'step-card':
      return StepCardExamples()
    case 'switch':
      return SwitchExamples()
    case 'table':
      return TableExamples()
    case 'tabs':
      return TabsExamples()
    case 'toast':
      return ToastExamples()
    case 'toggle-group':
      return ToggleGroupExamples()
    case 'tooltip':
      return TooltipExamples()
    default:
      return [createGenericExample(args)]
  }
}

function BottomSheetModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open bottom sheet</Button>
      <BottomSheetModalUI.BottomSheetModal
        description="Review the destination address and fee before confirming."
        onOpenChange={setOpen}
        open={open}
        title="Move funds"
      >
        <div className="rounded-xl border border-border bg-background p-4 text-body-sm text-muted-foreground">
          Signers and gas details render inside the sheet body.
        </div>
      </BottomSheetModalUI.BottomSheetModal>
    </>
  )
}

function FormDemo() {
  const form = useForm({
    defaultValues: {
      wallet: 'Primary account',
    },
  })

  return (
    <FormUI.Form {...form}>
      <form className="grid max-w-md gap-4" onSubmit={(event) => event.preventDefault()}>
        <FormUI.FormField
          control={form.control}
          name="wallet"
          render={({ field }) => (
            <FormUI.FormItem>
              <FormUI.FormLabel>Wallet label</FormUI.FormLabel>
              <FormUI.FormControl>
                <Input placeholder="Primary account" {...field} />
              </FormUI.FormControl>
              <FormUI.FormDescription>Shown in portfolio and activity views.</FormUI.FormDescription>
            </FormUI.FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </FormUI.Form>
  )
}

function ToastTriggerDemo({ kind }: { kind: 'sonner' | 'toast' }) {
  const handleClick = () => {
    if (kind === 'sonner') {
      ToastUI.toast.success('Saved wallet preferences')
      return
    }

    ToastUI.toast('Saved wallet preferences')
  }

  return (
    <>
      <SonnerUI.Toaster />
      <Button onClick={handleClick} variant="secondary">
        {kind === 'sonner' ? 'Show success toast' : 'Show toast'}
      </Button>
    </>
  )
}
