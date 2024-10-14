import Root from './data-input.svelte'

import type { FormPathLeaves, SuperForm } from 'sveltekit-superforms'
import type { HTMLInputAttributes } from 'svelte/elements'

type Props<T extends Record<string, unknown>> = Omit<HTMLInputAttributes, "name" | "form"> & {
  value: string
  form: SuperForm<T>,
  name: FormPathLeaves<T>,
  label?: string,
  description?: string
}

export {
  Root as TextInput,
  type Props as TextInputProps
}
