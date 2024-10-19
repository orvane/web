import Root from './select-input.svelte';

import type { FormPathLeaves, SuperForm } from 'sveltekit-superforms';

interface Props<T extends Record<string, unknown>> {
  form: SuperForm<T>,
  name: FormPathLeaves<T>;
}

export {
  Root as SelectInput,
  type Props as SelectInputProps
}
