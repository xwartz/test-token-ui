export type RegistryItem = {
  name: string
  files: string[]
  dependencies?: string[]
  registryDependencies?: string[]
}

export const registry: Record<string, RegistryItem> = {
  accordion: {
    name: 'accordion',
    files: ['components/accordion.tsx'],
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
  },
  'action-bar': {
    name: 'action-bar',
    files: ['components/action-bar.tsx'],
    dependencies: ['class-variance-authority'],
  },
  'alert-dialog': {
    name: 'alert-dialog',
    files: ['components/alert-dialog.tsx'],
    dependencies: ['@radix-ui/react-alert-dialog'],
    registryDependencies: ['button'],
  },
  alert: {
    name: 'alert',
    files: ['components/alert.tsx'],
    dependencies: ['class-variance-authority'],
  },
  'aspect-ratio': {
    name: 'aspect-ratio',
    files: ['components/aspect-ratio.tsx'],
    dependencies: ['@radix-ui/react-aspect-ratio'],
  },
  'asset-row': {
    name: 'asset-row',
    files: ['components/asset-row.tsx'],
  },
  avatar: {
    name: 'avatar',
    files: ['components/avatar.tsx'],
    dependencies: ['@radix-ui/react-avatar', 'class-variance-authority'],
  },
  badge: {
    name: 'badge',
    files: ['components/badge.tsx'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
  },
  'bottom-sheet-modal': {
    name: 'bottom-sheet-modal',
    files: ['components/bottom-sheet-modal.tsx'],
    dependencies: ['lucide-react'],
  },
  breadcrumb: {
    name: 'breadcrumb',
    files: ['components/breadcrumb.tsx'],
    dependencies: ['@radix-ui/react-slot', 'lucide-react'],
  },
  button: {
    name: 'button',
    files: ['components/button.tsx'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
  },
  calendar: {
    name: 'calendar',
    files: ['components/calendar.tsx'],
    dependencies: ['lucide-react', 'react-day-picker'],
    registryDependencies: ['button'],
  },
  card: {
    name: 'card',
    files: ['components/card.tsx'],
  },
  carousel: {
    name: 'carousel',
    files: ['components/carousel.tsx'],
    dependencies: ['embla-carousel-react', 'lucide-react'],
    registryDependencies: ['button'],
  },
  chart: {
    name: 'chart',
    files: ['components/chart.tsx'],
    dependencies: ['recharts'],
  },
  'chat-bubble': {
    name: 'chat-bubble',
    files: ['components/chat-bubble.tsx'],
    dependencies: ['class-variance-authority'],
  },
  checkbox: {
    name: 'checkbox',
    files: ['components/checkbox.tsx'],
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
  },
  'checklist-card': {
    name: 'checklist-card',
    files: ['components/checklist-card.tsx'],
  },
  chip: {
    name: 'chip',
    files: ['components/chip.tsx'],
    dependencies: ['class-variance-authority'],
  },
  collapsible: {
    name: 'collapsible',
    files: ['components/collapsible.tsx'],
    dependencies: ['@radix-ui/react-collapsible'],
  },
  command: {
    name: 'command',
    files: ['components/command.tsx'],
    dependencies: ['cmdk', 'lucide-react'],
    registryDependencies: ['dialog'],
  },
  'context-menu': {
    name: 'context-menu',
    files: ['components/context-menu.tsx'],
    dependencies: ['@radix-ui/react-context-menu', 'lucide-react'],
  },
  dialog: {
    name: 'dialog',
    files: ['components/dialog.tsx'],
    dependencies: ['@radix-ui/react-dialog', 'lucide-react'],
  },
  drawer: {
    name: 'drawer',
    files: ['components/drawer.tsx'],
    dependencies: ['vaul'],
  },
  'dropdown-menu': {
    name: 'dropdown-menu',
    files: ['components/dropdown-menu.tsx'],
    dependencies: ['@radix-ui/react-dropdown-menu', 'lucide-react'],
  },
  'feature-item': {
    name: 'feature-item',
    files: ['components/feature-item.tsx'],
    dependencies: ['lucide-react'],
  },
  form: {
    name: 'form',
    files: ['components/form.tsx'],
    dependencies: ['@radix-ui/react-label', '@radix-ui/react-slot', 'react-hook-form'],
    registryDependencies: ['label'],
  },
  'holding-card': {
    name: 'holding-card',
    files: ['components/holding-card.tsx'],
  },
  'hover-card': {
    name: 'hover-card',
    files: ['components/hover-card.tsx'],
    dependencies: ['@radix-ui/react-hover-card'],
  },
  'icon-box': {
    name: 'icon-box',
    files: ['components/icon-box.tsx'],
    dependencies: ['class-variance-authority'],
  },
  'icon-button': {
    name: 'icon-button',
    files: ['components/icon-button.tsx'],
    dependencies: ['class-variance-authority'],
  },
  'input-otp': {
    name: 'input-otp',
    files: ['components/input-otp.tsx'],
    dependencies: ['input-otp', 'lucide-react'],
  },
  input: {
    name: 'input',
    files: ['components/input.tsx'],
  },
  label: {
    name: 'label',
    files: ['components/label.tsx'],
    dependencies: ['@radix-ui/react-label'],
  },
  menubar: {
    name: 'menubar',
    files: ['components/menubar.tsx'],
    dependencies: ['@radix-ui/react-menubar', 'lucide-react'],
  },
  'nav-item': {
    name: 'nav-item',
    files: ['components/nav-item.tsx'],
  },
  'navigation-menu': {
    name: 'navigation-menu',
    files: ['components/navigation-menu.tsx'],
    dependencies: ['@radix-ui/react-navigation-menu', 'class-variance-authority', 'lucide-react'],
  },
  pagination: {
    name: 'pagination',
    files: ['components/pagination.tsx'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    registryDependencies: ['button'],
  },
  popover: {
    name: 'popover',
    files: ['components/popover.tsx'],
    dependencies: ['@radix-ui/react-popover'],
  },
  progress: {
    name: 'progress',
    files: ['components/progress.tsx'],
    dependencies: ['@radix-ui/react-progress', 'class-variance-authority'],
  },
  'radio-group': {
    name: 'radio-group',
    files: ['components/radio-group.tsx'],
    dependencies: ['@radix-ui/react-radio-group', 'lucide-react'],
  },
  resizable: {
    name: 'resizable',
    files: ['components/resizable.tsx'],
    dependencies: ['lucide-react', 'react-resizable-panels'],
  },
  'scroll-area': {
    name: 'scroll-area',
    files: ['components/scroll-area.tsx'],
    dependencies: ['@radix-ui/react-scroll-area'],
  },
  'section-panel': {
    name: 'section-panel',
    files: ['components/section-panel.tsx'],
    dependencies: ['class-variance-authority'],
  },
  select: {
    name: 'select',
    files: ['components/select.tsx'],
    dependencies: ['@radix-ui/react-select', 'lucide-react'],
  },
  separator: {
    name: 'separator',
    files: ['components/separator.tsx'],
    dependencies: ['@radix-ui/react-separator'],
  },
  sheet: {
    name: 'sheet',
    files: ['components/sheet.tsx'],
    dependencies: ['@radix-ui/react-dialog', 'lucide-react'],
  },
  sidebar: {
    name: 'sidebar',
    files: ['components/sidebar.tsx', 'hooks/use-mobile.ts'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'lucide-react'],
    registryDependencies: ['button', 'input', 'separator', 'sheet', 'skeleton', 'tooltip'],
  },
  skeleton: {
    name: 'skeleton',
    files: ['components/skeleton.tsx'],
  },
  slider: {
    name: 'slider',
    files: ['components/slider.tsx'],
    dependencies: ['@radix-ui/react-slider'],
  },
  sonner: {
    name: 'sonner',
    files: ['components/sonner.tsx'],
    dependencies: ['sonner'],
  },
  'stat-cell': {
    name: 'stat-cell',
    files: ['components/stat-cell.tsx'],
  },
  'step-card': {
    name: 'step-card',
    files: ['components/step-card.tsx'],
    dependencies: ['lucide-react'],
  },
  switch: {
    name: 'switch',
    files: ['components/switch.tsx'],
    dependencies: ['@radix-ui/react-switch'],
  },
  table: {
    name: 'table',
    files: ['components/table.tsx'],
  },
  tabs: {
    name: 'tabs',
    files: ['components/tabs.tsx'],
    dependencies: ['@radix-ui/react-tabs'],
  },
  'task-card': {
    name: 'task-card',
    files: ['components/task-card.tsx'],
  },
  textarea: {
    name: 'textarea',
    files: ['components/textarea.tsx'],
  },
  toast: {
    name: 'toast',
    files: ['components/toast.tsx'],
    dependencies: ['sonner'],
  },
  'toggle-group': {
    name: 'toggle-group',
    files: ['components/toggle-group.tsx'],
    dependencies: ['@radix-ui/react-toggle-group', 'class-variance-authority'],
    registryDependencies: ['toggle'],
  },
  toggle: {
    name: 'toggle',
    files: ['components/toggle.tsx'],
    dependencies: ['@radix-ui/react-toggle', 'class-variance-authority'],
  },
  tooltip: {
    name: 'tooltip',
    files: ['components/tooltip.tsx'],
    dependencies: ['@radix-ui/react-tooltip'],
  },
}

export const baseFiles = ['lib/utils.ts', 'styles/globals.css']
