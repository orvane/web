import Root from './select-input.svelte';
import { Select, type WithoutChildren, type SelectBaseRootPropsWithoutHTML } from 'bits-ui';
import { sva } from 'styled-system/css';

const styles = sva({
  className: 'select-input',
  slots: [
    'root',
    'control',
    'label',
    'description',
    'trigger',
    'content',
    'item',
    'errors',
    'error'
  ]
});

import type { FormPathArrays, FormPathLeaves, SuperForm } from 'sveltekit-superforms';

type Props<T extends Record<string, unknown>, M extends boolean> = WithoutChildren<
  Omit<Select.RootProps, 'name' | 'type' | 'value' | 'onValueChange'>
> & {
  multiple: M;
  value: M extends true ? string[] : string;
  form: SuperForm<T>;
  name: M extends true ? FormPathArrays<T> : FormPathLeaves<T>;
  items: (Omit<Select.ItemProps, 'label' | 'ref'> & {
    label: string;
    ref?: HTMLDivElement | null
  })[];
  placeholder?: string;

  // Subcompnents
  label?: {
    value?: string;
  };
  labelRef?: HTMLLabelElement | null;

  trigger?: {
    placeholder?: string;
  };
  triggerRef?: HTMLButtonElement | null;

  content?: Select.ContentProps & {};
  contentRef?: HTMLDivElement | null;

  description?: {
    value?: string;
  };
  descriptionRef?: HTMLDivElement | null;

  errors?: {

  },
  errorsRef?: HTMLDivElement | null
};

export { Root as SelectInput, styles as SelectInputStyles, type Props as SelectInputProps };
