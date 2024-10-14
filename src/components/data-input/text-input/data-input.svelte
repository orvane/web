<script lang="ts" generics="T extends Record<string, unknown>">
	import { Field, FieldErrors, Control, Label, Description } from 'formsnap';

	import type { TextInputProps } from '.';

	let {
		value = $bindable(),
		form,
		name,
		label,
		description,
		...props
	}: TextInputProps<T> = $props();
</script>

<Field {form} {name}>
	<Control let:attrs>
		{#if label}
			<Label>{label}</Label>
		{/if}

		<input type="text" bind:value {...props} {...attrs} />
	</Control>

	{#if description}
		<Description>
			{description}
		</Description>
	{/if}

	<FieldErrors />
</Field>
