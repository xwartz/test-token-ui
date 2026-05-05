import { baseFiles, registry } from '../registry.js'
import { copyRegistryFile } from './shared.js'

export type AddOptions = {
  components: string[]
  cwd: string
  dryRun: boolean
}

export async function addCommand({ components, cwd, dryRun }: AddOptions) {
  if (components.length === 0) {
    throw new Error(
      "Please provide at least one component name, for example: test-token-ui add card",
    )
  }

  const files = new Set(baseFiles)
  const dependencies = new Set<string>()
  const selectedComponents = new Set<string>()

  const addComponent = (component: string) => {
    if (selectedComponents.has(component)) {
      return
    }

    const item = registry[component]

    if (!item) {
      const available = Object.keys(registry).sort().join(', ')
      throw new Error(`Unknown component "${component}". Available components: ${available}`)
    }

    selectedComponents.add(component)

    for (const registryDependency of item.registryDependencies ?? []) {
      addComponent(registryDependency)
    }

    for (const file of item.files) files.add(file)
    for (const dependency of item.dependencies ?? []) dependencies.add(dependency)
  }

  for (const component of components) {
    addComponent(component)
  }

  for (const file of files) {
    await copyRegistryFile({ file, cwd, dryRun })
  }

  if (dependencies.size > 0) {
    console.log(`Install peer dependencies: pnpm add ${Array.from(dependencies).sort().join(' ')}`)
  }

  console.log(`Added ${Array.from(selectedComponents).join(', ')}.`)
}
