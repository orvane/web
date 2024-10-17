<script lang="ts" generics="T extends Record<string, unknown>">
	import { Checkbox, Label } from 'bits-ui';
	import { Control, Description, Field, FieldErrors, Label as FormLabel } from 'formsnap';
	import { CheckboxInputStyles, type CheckboxInputProps } from '.';
	import { Check, X, Minus } from 'lucide-svelte';

	let {
		checked = $bindable(false),
		ref = $bindable(null),
		labelRef = $bindable(null),
		form,
		name,
		label,
		description,
		...props
	}: CheckboxInputProps<T> = $props();

	let classes = CheckboxInputStyles({});
</script>

<div class={classes.root}>
	<Field {form} {name}>
		<Control let:attrs>
			<FormLabel asChild let:labelAttrs>
				<Label.Root bind:ref={labelRef} {...labelAttrs}>
					{label}
				</Label.Root>
			</FormLabel>

			<Checkbox.Root bind:checked bind:ref {...props} {...attrs}>
				{#if checked === 'indeterminate'}
					<Minus />
				{:else if checked}
					<Check />
				{:else}
					<X />
				{/if}
			</Checkbox.Root>
		</Control>

		{#if description}
			<Description class={classes.description}>
				{description}
			</Description>
		{/if}

		<FieldErrors class={classes.errors} let:errors let:errorAttrs>
			{#each errors as err}
				<span class={classes.error} {...errorAttrs}>{err}</span>
			{/each}
		</FieldErrors>
	</Field>
</div>
