<script lang="ts" generics="T extends Record<string, unknown>">
	import { Checkbox, Label } from 'bits-ui';
	import { Control, Description, Field, FieldErrors, Label as FormLabel } from 'formsnap';
	import { CheckboxInputStyles, type CheckboxInputProps } from '.';
	import { Check, X, Minus } from 'lucide-svelte';
	import { css } from 'styled-system/css';

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

	let inputRef: HTMLInputElement;

	let classes = CheckboxInputStyles({});
	let inputChecked = $state(checked === true ? true : false);
</script>

<div class={classes.root}>
	<Field {form} {name}>
		<Control let:attrs>
			{#if label}
				<FormLabel asChild let:labelAttrs>
					<Label.Root bind:ref={labelRef} {...labelAttrs}>
						{label}
					</Label.Root>
				</FormLabel>
			{/if}

			<Checkbox.Root
				bind:checked
				value={checked === true ? 'true' : 'false'}
				onCheckedChange={() => {
					inputRef.click();
				}}
				bind:ref
				{...props}
				{...attrs}
			>
				{#if checked === 'indeterminate'}
					<Minus />
				{:else if checked}
					<Check />
				{:else}
					<X />
				{/if}
			</Checkbox.Root>

			<input
				type="checkbox"
				bind:checked={inputChecked}
				bind:this={inputRef}
				class={css({ display: 'none' })}
			/>
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
