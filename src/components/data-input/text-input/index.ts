import Root from './text-input.svelte';
import { sva } from 'styled-system/css';

import type { FormPathLeaves, SuperForm } from 'sveltekit-superforms';
import type { HTMLInputAttributes } from 'svelte/elements';

const styles = sva({
	className: 'text-input',
	slots: ['root', 'control', 'input', 'label', 'description', 'errors', 'error'],
	base: {
		root: {
			// TODO: Add a shortcut of some sort to create generic repeating styles like flex-col, etc.
			display: 'flex',
			flexDirection: 'column'
		},
		control: {
			display: 'flex',
			flexDirection: 'column'
		},
		input: {
			borderWidth: 2
		}
	},
	variants: {
		size: {
			sm: {
				input: {
					borderRadius: 8,
					paddingX: 8,
					paddingY: 4
				}
			},
			md: {
				input: {
					borderRadius: 12,
					paddingX: 12,
					paddingY: 6
				}
			},
			lg: {
				input: {
					borderRadius: 16,
					paddingX: 16,
					paddingY: 8
				}
			}
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

type Props<T extends Record<string, unknown>> = Omit<
	HTMLInputAttributes,
	'form' | 'name' | 'size' | ''
> & {
	form: SuperForm<T>;
	name: FormPathLeaves<T>;
	ref?: HTMLInputElement | null;
	label?: string;
	labelRef?: HTMLLabelElement | null;
	description?: string;
	size?: 'sm' | 'md' | 'lg';
};

export { Root as TextInput, styles as TextInputStyles, type Props as TextInputProps };
