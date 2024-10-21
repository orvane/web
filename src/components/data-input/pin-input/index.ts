import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms'
import Root from './pin-input.svelte'
import type { PinInput } from 'bits-ui';
import { sva } from 'styled-system/css';

let styles = sva({
  className: 'pin-input',
  slots: ['root', 'control', 'label', 'input', 'cell', 'description', 'errors', 'error']
})

type Props<T extends Record<string, unknown>> = PinInput.RootProps & {
  form: SuperForm<T>,
  name: FormPathLeaves<T>,
  label?: {
    value?: string
  },
  labelRef?: HTMLLabelElement | null,
  description?: {
    value?: string;
  },
  descriptionRef?: HTMLDivElement | null,
  errors?: {},
  errorsRef?: HTMLDivElement | null
}

export { Root as PinInput, styles as PinInputStyles, type Props as PinInputProps }
