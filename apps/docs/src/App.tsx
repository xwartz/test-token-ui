import { Badge } from "@xwartz/test-token-ui-source/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@xwartz/test-token-ui-source/components/card"
import { ArrowRight, Code2, GitBranch, Palette, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { CodeBlock } from "./components/code-block"
import { DocsShell } from "./components/docs-shell"
import {
  getComponentExamples,
  type ComponentDocExample,
} from "./previews/component-demos"

const docSections = [
  { path: "/docs", label: "Introduction" },
  { path: "/docs/installation", label: "Installation" },
  { path: "/docs/components", label: "Components" },
  { path: "/docs/theming", label: "Theming" },
  { path: "/docs/cli", label: "CLI" },
]

const componentGroups = [
  {
    title: "Primitives",
    items: [
      "accordion",
      "alert",
      "aspect-ratio",
      "avatar",
      "badge",
      "button",
      "card",
      "checkbox",
      "collapsible",
      "icon-button",
      "input",
      "label",
      "progress",
      "separator",
      "skeleton",
      "slider",
      "switch",
      "textarea",
      "toggle",
      "toggle-group",
    ],
  },
  {
    title: "Overlays",
    items: [
      "alert-dialog",
      "bottom-sheet-modal",
      "command",
      "context-menu",
      "dialog",
      "drawer",
      "dropdown-menu",
      "hover-card",
      "menubar",
      "popover",
      "select",
      "sheet",
      "sonner",
      "toast",
      "tooltip",
    ],
  },
  {
    title: "Navigation",
    items: [
      "breadcrumb",
      "carousel",
      "navigation-menu",
      "pagination",
      "scroll-area",
      "sidebar",
      "tabs",
    ],
  },
  {
    title: "Data And Forms",
    items: [
      "calendar",
      "chart",
      "form",
      "input-otp",
      "radio-group",
      "resizable",
      "table",
    ],
  },
  {
    title: "Patterns",
    items: [
      "action-bar",
      "asset-row",
      "chat-bubble",
      "checklist-card",
      "chip",
      "feature-item",
      "holding-card",
      "icon-box",
      "nav-item",
      "section-panel",
      "stat-cell",
      "step-card",
      "task-card",
    ],
  },
]

const components = componentGroups.flatMap((group) =>
  group.items.map((name) => ({ name, group: group.title })),
)

const componentApis: Record<string, string[]> = {
  accordion: [
    "Accordion",
    "AccordionContent",
    "AccordionItem",
    "AccordionTrigger",
  ],
  "action-bar": ["ActionBar", "ActionButton", "actionButtonVariants"],
  "alert-dialog": [
    "AlertDialog",
    "AlertDialogAction",
    "AlertDialogCancel",
    "AlertDialogContent",
    "AlertDialogDescription",
    "AlertDialogFooter",
    "AlertDialogHeader",
    "AlertDialogOverlay",
    "AlertDialogPortal",
    "AlertDialogTitle",
    "AlertDialogTrigger",
  ],
  alert: ["Alert", "AlertDescription", "AlertTitle"],
  "aspect-ratio": ["AspectRatio"],
  "asset-row": ["AssetRow"],
  avatar: ["Avatar", "AvatarFallback", "AvatarImage", "avatarVariants"],
  badge: ["Badge", "badgeVariants"],
  "bottom-sheet-modal": ["BottomSheetModal"],
  breadcrumb: [
    "Breadcrumb",
    "BreadcrumbEllipsis",
    "BreadcrumbItem",
    "BreadcrumbLink",
    "BreadcrumbList",
    "BreadcrumbPage",
    "BreadcrumbSeparator",
  ],
  button: ["Button", "buttonVariants"],
  calendar: ["Calendar"],
  card: [
    "Card",
    "CardAction",
    "CardContent",
    "CardDescription",
    "CardFooter",
    "CardHeader",
    "CardTitle",
  ],
  carousel: [
    "Carousel",
    "CarouselContent",
    "CarouselItem",
    "CarouselNext",
    "CarouselPrevious",
  ],
  chart: [
    "ChartContainer",
    "ChartLegend",
    "ChartLegendContent",
    "ChartTooltip",
    "ChartTooltipContent",
  ],
  "chat-bubble": ["ChatBubble", "chatBubbleVariants"],
  checkbox: ["Checkbox"],
  "checklist-card": ["ChecklistCard"],
  chip: ["Chip", "chipVariants"],
  collapsible: ["Collapsible", "CollapsibleContent", "CollapsibleTrigger"],
  command: [
    "Command",
    "CommandDialog",
    "CommandEmpty",
    "CommandGroup",
    "CommandInput",
    "CommandItem",
    "CommandList",
    "CommandSeparator",
    "CommandShortcut",
  ],
  "context-menu": [
    "ContextMenu",
    "ContextMenuCheckboxItem",
    "ContextMenuContent",
    "ContextMenuGroup",
    "ContextMenuItem",
    "ContextMenuLabel",
    "ContextMenuPortal",
    "ContextMenuRadioGroup",
    "ContextMenuRadioItem",
    "ContextMenuSeparator",
    "ContextMenuShortcut",
    "ContextMenuSub",
    "ContextMenuSubContent",
    "ContextMenuSubTrigger",
    "ContextMenuTrigger",
  ],
  dialog: [
    "Dialog",
    "DialogClose",
    "DialogContent",
    "DialogDescription",
    "DialogFooter",
    "DialogHeader",
    "DialogOverlay",
    "DialogPortal",
    "DialogTitle",
    "DialogTrigger",
  ],
  drawer: [
    "Drawer",
    "DrawerClose",
    "DrawerContent",
    "DrawerDescription",
    "DrawerFooter",
    "DrawerHeader",
    "DrawerOverlay",
    "DrawerPortal",
    "DrawerTitle",
    "DrawerTrigger",
  ],
  "dropdown-menu": [
    "DropdownMenu",
    "DropdownMenuCheckboxItem",
    "DropdownMenuContent",
    "DropdownMenuGroup",
    "DropdownMenuItem",
    "DropdownMenuLabel",
    "DropdownMenuPortal",
    "DropdownMenuRadioGroup",
    "DropdownMenuRadioItem",
    "DropdownMenuSeparator",
    "DropdownMenuShortcut",
    "DropdownMenuSub",
    "DropdownMenuSubContent",
    "DropdownMenuSubTrigger",
    "DropdownMenuTrigger",
  ],
  "feature-item": ["FeatureItem"],
  form: [
    "Form",
    "FormControl",
    "FormDescription",
    "FormField",
    "FormItem",
    "FormLabel",
    "FormMessage",
    "useFormField",
  ],
  "holding-card": ["HoldingCard"],
  "hover-card": ["HoverCard", "HoverCardContent", "HoverCardTrigger"],
  "icon-box": ["IconBox", "iconBoxVariants"],
  "icon-button": ["IconButton", "iconButtonVariants"],
  "input-otp": [
    "InputOTP",
    "InputOTPGroup",
    "InputOTPSeparator",
    "InputOTPSlot",
  ],
  input: ["Input"],
  label: ["Label"],
  menubar: [
    "Menubar",
    "MenubarCheckboxItem",
    "MenubarContent",
    "MenubarGroup",
    "MenubarItem",
    "MenubarLabel",
    "MenubarMenu",
    "MenubarPortal",
    "MenubarRadioGroup",
    "MenubarRadioItem",
    "MenubarSeparator",
    "MenubarShortcut",
    "MenubarSub",
    "MenubarSubContent",
    "MenubarSubTrigger",
    "MenubarTrigger",
  ],
  "nav-item": ["NavItem"],
  "navigation-menu": [
    "NavigationMenu",
    "NavigationMenuContent",
    "NavigationMenuIndicator",
    "NavigationMenuItem",
    "NavigationMenuLink",
    "NavigationMenuList",
    "NavigationMenuTrigger",
    "NavigationMenuViewport",
    "navigationMenuTriggerStyle",
  ],
  pagination: [
    "Pagination",
    "PaginationContent",
    "PaginationEllipsis",
    "PaginationItem",
    "PaginationLink",
    "PaginationNext",
    "PaginationPrevious",
  ],
  popover: ["Popover", "PopoverAnchor", "PopoverContent", "PopoverTrigger"],
  progress: ["Progress", "progressTrackVariants"],
  "radio-group": ["RadioGroup", "RadioGroupItem"],
  resizable: ["ResizableHandle", "ResizablePanel", "ResizablePanelGroup"],
  "scroll-area": ["ScrollArea", "ScrollBar"],
  "section-panel": ["SectionPanel", "sectionPanelVariants"],
  select: [
    "Select",
    "SelectContent",
    "SelectGroup",
    "SelectItem",
    "SelectLabel",
    "SelectScrollDownButton",
    "SelectScrollUpButton",
    "SelectSeparator",
    "SelectTrigger",
    "SelectValue",
  ],
  separator: ["Separator"],
  sheet: [
    "Sheet",
    "SheetClose",
    "SheetContent",
    "SheetDescription",
    "SheetFooter",
    "SheetHeader",
    "SheetTitle",
    "SheetTrigger",
  ],
  sidebar: [
    "Sidebar",
    "SidebarContent",
    "SidebarFooter",
    "SidebarGroup",
    "SidebarGroupAction",
    "SidebarGroupContent",
    "SidebarGroupLabel",
    "SidebarHeader",
    "SidebarInput",
    "SidebarInset",
    "SidebarMenu",
    "SidebarMenuAction",
    "SidebarMenuBadge",
    "SidebarMenuButton",
    "SidebarMenuItem",
    "SidebarMenuSkeleton",
    "SidebarMenuSub",
    "SidebarMenuSubButton",
    "SidebarMenuSubItem",
    "SidebarProvider",
    "SidebarRail",
    "SidebarSeparator",
    "SidebarTrigger",
    "useSidebar",
  ],
  skeleton: ["Skeleton"],
  slider: ["Slider"],
  sonner: ["Toaster"],
  "stat-cell": ["StatCell"],
  "step-card": ["StepCard"],
  switch: ["Switch"],
  table: [
    "Table",
    "TableBody",
    "TableCaption",
    "TableCell",
    "TableFooter",
    "TableHead",
    "TableHeader",
    "TableRow",
  ],
  tabs: ["Tabs", "TabsContent", "TabsList", "TabsTrigger"],
  "task-card": ["TaskCard"],
  textarea: ["Textarea"],
  toast: ["toast"],
  "toggle-group": ["ToggleGroup", "ToggleGroupItem"],
  toggle: ["Toggle", "toggleVariants"],
  tooltip: ["Tooltip", "TooltipContent", "TooltipProvider", "TooltipTrigger"],
}

const componentProps: Record<
  string,
  Array<{ name: string; type: string; description: string }>
> = {
  accordion: [
    {
      name: "type",
      type: '"single" | "multiple"',
      description: "Controls whether one or multiple items can be open.",
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "Allows the open item to be collapsed.",
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "Initial open item value.",
    },
  ],
  badge: [
    {
      name: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "primary" | "success" | "neutral" | "positive"',
      description: "Visual style variant.",
    },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Badge density." },
    {
      name: "asChild",
      type: "boolean",
      description: "Render as the child element via Radix Slot.",
    },
  ],
  button: [
    {
      name: "variant",
      type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "foreground" | "link"',
      description: "Visual style variant.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "default" | "lg" | "hero" | "icon" | "icon-sm"',
      description: "Button size and density.",
    },
    {
      name: "asChild",
      type: "boolean",
      description: "Render as the child element via Radix Slot.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Native disabled state.",
    },
  ],
  card: [
    {
      name: "size",
      type: '"default" | "sm"',
      description: "Card spacing density.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional classes merged with test-token-ui styles.",
    },
  ],
  dialog: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "Initial uncontrolled open state.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Open state change handler.",
    },
  ],
  input: [
    { name: "type", type: "string", description: "Native input type." },
    {
      name: "aria-invalid",
      type: "boolean",
      description: "Applies invalid focus and border styling.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Native disabled state.",
    },
  ],
}

const defaultProps = [
  {
    name: "className",
    type: "string",
    description: "Additional classes merged with test-token-ui styles.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Nested content when the component accepts children.",
  },
]

const installCode = `pnpm dlx @xwartz/test-token-ui@latest init
pnpm dlx @xwartz/test-token-ui@latest add button card input badge dialog`

const usageCode = `import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PortfolioCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Continue</Button>
      </CardContent>
    </Card>
  )
}`

const tokenGroups = [
  {
    title: "Base",
    tokens: [
      "background",
      "foreground",
      "card",
      "card-foreground",
      "popover",
      "popover-foreground",
      "muted",
      "muted-foreground",
    ],
  },
  {
    title: "Actions",
    tokens: [
      "primary",
      "primary-hover",
      "primary-active",
      "primary-disabled",
      "primary-soft",
      "primary-foreground",
      "secondary",
      "secondary-foreground",
      "accent",
      "accent-foreground",
      "destructive",
      "destructive-hover",
      "destructive-foreground",
    ],
  },
  {
    title: "Borders And Inputs",
    tokens: [
      "border",
      "border-strong",
      "border-subtle",
      "input",
      "input-background",
      "ring",
      "switch-background",
    ],
  },
  {
    title: "Surfaces",
    tokens: [
      "surface-page",
      "surface-blue",
      "surface-blue-light",
      "surface-blue-dim",
      "surface-blue-info",
      "surface-cool",
      "surface-light",
      "surface-ai-tinted",
      "surface-glass-page",
      "surface-glass-elevated",
      "surface-glass-modal",
      "dark-surface",
    ],
  },
  {
    title: "Feedback",
    tokens: [
      "success",
      "success-foreground",
      "success-text",
      "success-surface",
      "success-border",
      "warning",
      "warning-text",
      "warning-surface",
      "warning-border",
      "danger-border",
      "error-text",
      "error-surface",
      "info",
      "info-surface",
      "info-border",
      "positive",
      "positive-surface",
    ],
  },
  {
    title: "Text And Brand",
    tokens: [
      "brand",
      "brand-secondary",
      "brand-hover",
      "brand-deep",
      "text-secondary-gray",
      "text-tertiary",
      "text-disabled",
      "text-inverse",
      "text-ai",
      "ai-primary",
      "ai-subtle-bg",
      "ai-subtle-border",
      "ai-emphasis",
      "ai-text",
      "ai-icon",
    ],
  },
  {
    title: "Charts And State",
    tokens: [
      "chart-1",
      "chart-2",
      "chart-3",
      "chart-4",
      "chart-5",
      "tx-pending",
      "tx-confirmed",
      "tx-failed",
      "tx-dropped",
      "progress-track",
    ],
  },
  {
    title: "Radius, Shadow, Density",
    tokens: [
      "radius",
      "shadow-card",
      "shadow-card-md",
      "shadow-card-lg",
      "shadow-cta-sm",
      "shadow-cta",
      "shadow-cta-lg",
      "shadow-icon",
      "shadow-dialog",
      "shadow-nav-active",
      "density-compact-y",
      "density-compact-x",
      "density-comfortable-y",
      "density-comfortable-x",
      "density-spacious-y",
      "density-spacious-x",
      "density-airy-y",
      "density-airy-x",
    ],
  },
  {
    title: "Sidebar",
    tokens: [
      "sidebar",
      "sidebar-foreground",
      "sidebar-primary",
      "sidebar-primary-foreground",
      "sidebar-accent",
      "sidebar-accent-foreground",
      "sidebar-border",
      "sidebar-ring",
    ],
  },
]

const principles = [
  {
    icon: Code2,
    title: "Open Code",
    description:
      "The component source is copied into the app so product teams can read, edit, and extend it directly.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Defaults",
    description:
      "Components start with Token UI tokens, generous radius, calm surfaces, and token-centric hierarchy.",
  },
  {
    icon: GitBranch,
    title: "Distribution",
    description:
      "A generated registry and CLI distribute source files, local dependencies, hooks, and peer dependency hints.",
  },
]

const installSteps = [
  [
    "Initialize",
    "Write components.json, utils, and the global token CSS contract.",
  ],
  [
    "Add Components",
    "Copy selected components and their registry dependencies into your app.",
  ],
  [
    "Compose Screens",
    "Build wallet-quality pages with local source files and semantic tokens.",
  ],
]

const cliCommands = [
  [
    "init",
    "Create base project files.",
    "pnpm dlx @xwartz/test-token-ui@latest init",
  ],
  [
    "add",
    "Copy one or more components.",
    "pnpm dlx @xwartz/test-token-ui@latest add button card",
  ],
  [
    "dry-run",
    "Preview copied files before writing.",
    "pnpm dlx @xwartz/test-token-ui@latest add sidebar --dry-run",
  ],
  [
    "list",
    "List registry components.",
    "pnpm dlx @xwartz/test-token-ui@latest list",
  ],
]

function getRoute() {
  const route = window.location.hash.replace(/^#/, "")
  return route.startsWith("/docs") ? route : "/docs"
}

function formatComponentName(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function formatComponentIdentifier(name: string) {
  return `${name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}Component`
}

function getComponentDescription(component: { name: string; group: string }) {
  const name = formatComponentName(component.name)
  const descriptions: Record<string, string> = {
    Primitives: `${name} is a foundational primitive for consistent Token UI surfaces and interactions.`,
    Overlays: `${name} creates layered UI while preserving Token UI overlay, motion, and focus patterns.`,
    Navigation: `${name} helps structure product navigation and dense wallet workflows.`,
    "Data And Forms": `${name} supports structured input, data display, or form composition.`,
    "Token Patterns": `${name} is an opinionated pattern for token-centric product experiences.`,
  }

  return (
    descriptions[component.group] ??
    `${name} is a copyable test-token-ui component.`
  )
}

export function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute())
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const componentName = route.startsWith("/docs/components/")
    ? route.replace("/docs/components/", "")
    : null
  const selectedComponent = componentName
    ? components.find((component) => component.name === componentName)
    : null

  return (
    <DocsShell>
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 md:px-8 lg:grid-cols-[248px_minmax(0,1fr)]">
        <DocsSidebar activePath={route} />
        <div className="min-w-0">
          {selectedComponent ? (
            <ComponentPage component={selectedComponent} />
          ) : (
            <DocsPage route={route} />
          )}
        </div>
      </main>
    </DocsShell>
  )
}

function DocsSidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid gap-6">
          <SidebarGroup
            activePath={activePath}
            items={docSections}
            title="Sections"
          />
          <div className="grid gap-3">
            <p className="px-3 text-caption font-semibold text-muted-foreground">
              Components
            </p>
            {componentGroups.map((group) => (
              <div className="grid gap-1" key={group.title}>
                <p className="px-3 pt-2 text-caption font-medium text-muted-foreground">
                  {group.title}
                </p>
                {group.items.map((item) => {
                  const path = `/docs/components/${item}`
                  return (
                    <a
                      className={`rounded-md px-3 py-2 text-body-sm transition-colors ${
                        activePath === path
                          ? "bg-primary-soft text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                      href={`#${path}`}
                      key={item}
                    >
                      {formatComponentName(item)}
                    </a>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

function SidebarGroup({
  activePath,
  items,
  title,
}: {
  activePath: string
  items: Array<{ path: string; label: string }>
  title: string
}) {
  return (
    <div className="grid gap-2">
      <p className="px-3 text-caption font-semibold text-muted-foreground">
        {title}
      </p>
      <nav className="grid gap-1">
        {items.map((item) => (
          <a
            className={`rounded-md px-3 py-2 text-body-sm transition-colors ${
              activePath === item.path
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            href={`#${item.path}`}
            key={item.path}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

function DocsPage({ route }: { route: string }) {
  if (route === "/docs/installation") return <InstallationPage />
  if (route === "/docs/components") return <ComponentsPage />
  if (route === "/docs/theming") return <ThemingPage />
  if (route === "/docs/cli") return <CliPage />
  return <IntroductionPage />
}

function IntroductionPage() {
  return (
    <Article>
      <PageHeader
        badge="Introduction"
        description="A source-first UI kit for Token UI. It provides reusable components, design tokens, readable source files, and a predictable way to build token-centric interfaces."
        title="Build your token UI with open code"
      />
      <Callout
        title="This is not a traditional component library."
        description="Users do not import a locked runtime package. They copy source into their app, keep the design tokens intact, and own the code from there."
      />
      <ProseBlock title="Why this model">
        Traditional UI packages are convenient until teams need to customize
        behavior, adapt styling, or keep UI logic close to product code. The
        source-copy approach keeps the top layer of UI code visible and editable
        while still preserving a shared visual foundation.
      </ProseBlock>
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map(({ description, icon: Icon, title }) => (
          <Card className="bg-card/80" key={title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Pager nextHref="#/docs/installation" nextLabel="Installation" />
    </Article>
  )
}

function InstallationPage() {
  return (
    <Article>
      <PageHeader
        badge="Installation"
        description="Initialize the token contract, then add only the components needed by the app. The CLI writes local source files and prints peer dependencies."
        title="Install with pnpm dlx"
      />
      <CodeBlock code={installCode} />
      <div className="grid gap-4 md:grid-cols-3">
        {installSteps.map(([title, description], index) => (
          <Card key={title}>
            <CardHeader>
              <Badge className="mb-2 w-fit" variant="primary">
                Step {index + 1}
              </Badge>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <ProseBlock title="Generated files">
        The `init` command creates `components.json`, `src/lib/utils.ts`, and
        `src/styles/globals.css`. Component files are copied into
        `src/components/ui`, and hooks such as `use-mobile.ts` are copied into
        `src/hooks` when required.
      </ProseBlock>
      <Pager
        nextHref="#/docs/components"
        nextLabel="Components"
        prevHref="#/docs"
        prevLabel="Introduction"
      />
    </Article>
  )
}

function ComponentsPage() {
  return (
    <Article>
      <PageHeader
        badge="Components"
        description="Browse components by category. Each component page includes installation, usage guidance, API notes, and live examples."
        title="Component catalog"
      />
      <div className="grid gap-8">
        {componentGroups.map((group) => (
          <section
            className="grid gap-3"
            id={group.title.toLowerCase().replaceAll(" ", "-")}
            key={group.title}
          >
            <div>
              <h2 className="font-heading text-title-sm font-semibold tracking-snug">
                {group.title}
              </h2>
            </div>
            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {group.items.map((item) => (
                <a
                  className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-secondary"
                  href={`#/docs/components/${item}`}
                  key={item}
                >
                  <span className="font-heading text-body-md font-semibold">
                    {formatComponentName(item)}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Pager
        nextHref="#/docs/theming"
        nextLabel="Theming"
        prevHref="#/docs/installation"
        prevLabel="Installation"
      />
    </Article>
  )
}

function ComponentPage({
  component,
}: {
  component: { name: string; group: string }
}) {
  const name = formatComponentName(component.name)
  const exports = componentApis[component.name] ?? [
    formatComponentIdentifier(component.name),
  ]
  const primaryExport = exports[0]
  const componentIndex = components.findIndex(
    (item) => item.name === component.name,
  )
  const previousComponent = components[componentIndex - 1]
  const nextComponent = components[componentIndex + 1]
  const description = getComponentDescription(component)

  return (
    <Article>
      <PageHeader
        badge={component.group}
        description={description}
        title={name}
      />
      <DocSection
        description="Copy the component source and any registry dependencies into your project."
        title="Installation"
      >
        <CodeBlock
          code={`pnpm dlx @xwartz/test-token-ui@latest add ${component.name}`}
        />
      </DocSection>
      <DocSection
        description="Import copied files from your local app, not from a runtime package."
        title="Usage"
      >
        <CodeBlock
          code={`import { ${primaryExport} } from '@/components/ui/${component.name}'`}
          language="tsx"
        />
      </DocSection>
      <DocSection
        description="Common props, accepted values, and exported helpers for the copied source file."
        title="API Reference"
      >
        <ApiTable
          exports={exports}
          props={componentProps[component.name] ?? defaultProps}
        />
      </DocSection>
      <DocSection
        description="Live states rendered with real test-token-ui components, paired with matching source snippets."
        title="Examples"
      >
        <ExamplesBlock
          componentName={component.name}
          displayName={name}
          primaryExport={primaryExport}
        />
      </DocSection>
      <Pager
        nextHref={
          nextComponent
            ? `#/docs/components/${nextComponent.name}`
            : "#/docs/theming"
        }
        nextLabel={
          nextComponent ? formatComponentName(nextComponent.name) : "Theming"
        }
        prevHref={
          previousComponent
            ? `#/docs/components/${previousComponent.name}`
            : "#/docs/components"
        }
        prevLabel={
          previousComponent
            ? formatComponentName(previousComponent.name)
            : "Components"
        }
      />
    </Article>
  )
}

function ThemingPage() {
  return (
    <Article>
      <PageHeader
        badge="Theming"
        description="The token contract lives in globals.css and maps semantic variables to Tailwind utilities."
        title="Design tokens"
      />
      <Callout
        title="Use semantic tokens only."
        description="Components should use token classes such as bg-card, text-foreground, border-border, rounded-xl, and shadow-[var(--shadow-card)]. Avoid raw hex values and palette utilities."
      />
      <div className="grid gap-8">
        {tokenGroups.map((group) => (
          <section className="grid gap-3" key={group.title}>
            <h2 className="font-heading text-title-sm font-semibold tracking-snug">
              {group.title}
            </h2>
            <div className="grid gap-2 rounded-xl border border-border bg-card p-2 sm:grid-cols-2 xl:grid-cols-3">
              {group.tokens.map((token) => (
                <div
                  className="flex min-w-0 items-center justify-between gap-3 rounded-md bg-background px-3 py-2"
                  key={token}
                >
                  <code className="truncate text-body-sm text-foreground">
                    --{token}
                  </code>
                  <span
                    className="size-4 shrink-0 rounded-full border border-border"
                    style={{ background: `var(--${token})` }}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Design Rules</CardTitle>
          <CardDescription>
            Spacing follows a 4pt grid. Buttons are pill shaped. Cards use
            rounded surfaces and tokenized shadows. Dialog, sheet, and drawer
            overlays use `bg-dark-surface/50`.
          </CardDescription>
        </CardHeader>
      </Card>
      <Pager
        nextHref="#/docs/cli"
        nextLabel="CLI"
        prevHref="#/docs/components"
        prevLabel="Components"
      />
    </Article>
  )
}

function CliPage() {
  return (
    <Article>
      <PageHeader
        badge="CLI"
        description="The CLI copies files from the generated registry into the target project and prints peer dependencies."
        title="@xwartz/test-token-ui"
      />
      <div className="grid gap-4">
        {cliCommands.map(([name, description, command]) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={command} />
            </CardContent>
          </Card>
        ))}
      </div>
      <ProseBlock title="Peer dependencies">
        The CLI does not silently install peer dependencies. It prints a `pnpm
        add` command so users can keep control of their package manager and
        project constraints.
      </ProseBlock>
      <Card>
        <CardHeader>
          <CardTitle>After installation</CardTitle>
          <CardDescription>
            Import copied components from your local app instead of a runtime UI
            package.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code={usageCode} language="tsx" />
        </CardContent>
      </Card>
      <Pager prevHref="#/docs/theming" prevLabel="Theming" />
    </Article>
  )
}

function PreviewSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="rounded-lg border border-border bg-background p-5">
        {children}
      </div>
    </div>
  )
}

function ExamplesBlock({
  componentName,
  displayName,
  primaryExport,
}: {
  componentName: string
  displayName: string
  primaryExport: string
}) {
  const examples = getComponentExamples({
    componentName,
    displayName,
    primaryExport,
  })

  return (
    <div className="grid gap-6">
      {examples.map((example) => (
        <ExampleCard
          example={example}
          key={`${componentName}-${example.title}`}
        />
      ))}
    </div>
  )
}

function ApiTable({
  exports,
  props,
}: {
  exports: string[]
  props: Array<{ name: string; type: string; description: string }>
}) {
  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="hidden border-border border-b bg-surface-page/60 px-5 py-3 md:grid md:grid-cols-[140px_280px_minmax(0,1fr)] md:gap-4">
          <span className="text-caption font-medium text-muted-foreground">
            Prop
          </span>
          <span className="text-caption font-medium text-muted-foreground">
            Type
          </span>
          <span className="text-caption font-medium text-muted-foreground">
            Description
          </span>
        </div>
        <div className="divide-y divide-border">
          {props.map((prop) => (
            <div
              className="grid items-start gap-4 px-5 py-4 md:grid-cols-[140px_280px_minmax(0,1fr)]"
              key={prop.name}
            >
              <div className="grid gap-2 self-start">
                <span className="text-caption font-medium text-muted-foreground md:hidden">
                  Prop
                </span>
                <code className="inline-flex w-fit items-center rounded-md bg-secondary px-3 py-1.5 text-body-sm font-medium leading-none">
                  {prop.name}
                </code>
              </div>
              <div className="grid gap-2 self-start">
                <span className="text-caption font-medium text-muted-foreground md:hidden">
                  Type
                </span>
                <div className="flex flex-wrap gap-2">
                  {splitTypeTokens(prop.type).map((part) => (
                    <code
                      className="inline-flex items-center rounded-md bg-background px-3 py-1.5 text-body-sm leading-none text-muted-foreground"
                      key={`${prop.name}-${part}`}
                    >
                      {part}
                    </code>
                  ))}
                </div>
              </div>
              <div className="grid gap-2 self-start">
                <span className="text-caption font-medium text-muted-foreground md:hidden">
                  Description
                </span>
                <span className="max-w-3xl text-body-sm text-muted-foreground">
                  {prop.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        <span className="text-caption font-medium text-muted-foreground">
          Exports
        </span>
        <div className="flex flex-wrap gap-2">
          {exports.map((api) => (
            <code
              className="rounded-full bg-secondary px-3 py-1.5 text-body-sm"
              key={api}
            >
              {api}
            </code>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExampleCard({ example }: { example: ComponentDocExample }) {
  return (
    <div className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="grid gap-1">
        <h3 className="font-heading text-title-xs font-semibold tracking-snug">
          {example.title}
        </h3>
        <p className="max-w-3xl text-body-sm text-muted-foreground">
          {example.description}
        </p>
      </div>
      <PreviewSurface>{example.preview}</PreviewSurface>
      <CodeBlock code={example.code} language="tsx" />
    </div>
  )
}

function splitTypeTokens(type: string) {
  return type
    .split(/\s*\|\s*/g)
    .map((part) => part.trim())
    .filter(Boolean)
}

function DocSection({
  children,
  description,
  title,
}: {
  children: React.ReactNode
  description: string
  title: string
}) {
  return (
    <section className="grid gap-4">
      <div className="grid gap-2">
        <h2 className="font-heading text-title-sm font-semibold tracking-snug">
          {title}
        </h2>
        <p className="max-w-3xl text-body-md text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </section>
  )
}

function PageHeader({
  badge,
  description,
  title,
}: {
  badge: string
  description: string
  title: string
}) {
  return (
    <div className="grid gap-5 border-border border-b pb-8">
      <Badge className="w-fit" variant="neutral">
        {badge}
      </Badge>
      <div className="grid gap-4">
        <h1 className="max-w-3xl font-heading text-display-lg font-bold tracking-tight">
          {title}
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

function Article({ children }: { children: React.ReactNode }) {
  return <article className="grid gap-8 pb-20">{children}</article>
}

function Callout({
  description,
  title,
}: {
  description: string
  title: string
}) {
  return (
    <Card className="bg-surface-blue">
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-card text-primary shadow-[var(--shadow-icon)]">
          <Sparkles className="size-5" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function ProseBlock({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section className="grid gap-3">
      <h2 className="font-heading text-title-sm font-semibold tracking-snug">
        {title}
      </h2>
      <p className="max-w-3xl text-body-md text-muted-foreground">{children}</p>
    </section>
  )
}

function Pager({
  nextHref,
  nextLabel,
  prevHref,
  prevLabel,
}: {
  nextHref?: string
  nextLabel?: string
  prevHref?: string
  prevLabel?: string
}) {
  return (
    <div className="grid gap-3 border-border border-t pt-8 sm:grid-cols-2">
      {prevHref && prevLabel ? (
        <a
          className="grid gap-1 rounded-xl border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-secondary"
          href={prevHref}
        >
          <span className="text-caption text-muted-foreground">Previous</span>
          <span className="font-heading text-body-md font-semibold">
            {prevLabel}
          </span>
        </a>
      ) : (
        <div />
      )}
      {nextHref && nextLabel ? (
        <a
          className="grid gap-1 rounded-xl border border-border bg-card p-4 text-right transition-colors hover:border-border-strong hover:bg-secondary"
          href={nextHref}
        >
          <span className="text-caption text-muted-foreground">Next</span>
          <span className="font-heading text-body-md font-semibold">
            {nextLabel}
          </span>
        </a>
      ) : null}
    </div>
  )
}
