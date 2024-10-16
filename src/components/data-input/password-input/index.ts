import { type FormPathLeaves, type SuperForm } from 'sveltekit-superforms'
import Root from './password-input.svelte'
import type { HTMLInputAttributes } from 'svelte/elements'

type Props<T extends Record<string, unknown>> = Omit<HTMLInputAttributes, "form" | "name" | "size"> & {
  form: SuperForm<T>,
  name: FormPathLeaves<T>,
  label?: string,
  description?: string,
  size?: 'sm' | 'md' | 'lg'
}

export {
  Root as PasswordInput,
  type Props as PasswordInputProps
}
