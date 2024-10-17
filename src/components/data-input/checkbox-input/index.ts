import { sva } from 'styled-system/css';
import Root from './checkbox-input.svelte';
import type { CheckboxRootProps } from 'bits-ui';
import { type FormPathLeaves, type SuperForm } from 'sveltekit-superforms';

const styles = sva({
  className: 'checkbox',
  slots: ['root', 'control', 'input', 'label', 'description', 'errors', 'error'],
  base: {
    input: {
      borderRadius: 8,
      borderWidth: 2,
      borderColor: 'border.primary'
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          padding: 4
        }
      },
      md: {
        root: {
          padding: 6
        }
      },
      lg: {
        root: {
          padding: 8
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

type Props<T extends Record<string, unknown>> = Omit<
  CheckboxRootProps,
  'form' | 'name' | 'size'
> & {
  form: SuperForm<T>;
  name: FormPathLeaves<T>;
  ref?: HTMLButtonElement | null,
  label?: string;
  labelRef?: HTMLLabelElement | null
  description?: string;
};

export { Root as CheckboxInput, styles as CheckboxInputStyles, type Props as CheckboxInputProps };
