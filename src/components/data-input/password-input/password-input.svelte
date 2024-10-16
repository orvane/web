<script lang="ts" generics="T extends Record<string, unknown>">
	import { Control, Description, Field, FieldErrors, Label } from 'formsnap';
	import { input } from 'styled-system/patterns';
	import { Toggle } from 'bits-ui';
	import { Eye, EyeOff } from 'lucide-svelte';

	import type { PasswordInputProps } from '.';

	let {
		value = $bindable(),
		form,
		name,
		label,
		description,
		size,
		...props
	}: PasswordInputProps<T> = $props();

	let passwordVisible = $state(false);
</script>

<Field {form} {name}>
	<Control let:attrs>
		{#if label}
			<Label>{label}</Label>
		{/if}

		<input
			type={passwordVisible ? 'text' : 'password'}
			bind:value
			class={input({
				type: 'password',
				size
			})}
			{...props}
			{...attrs}
		/>

		<Toggle.Root bind:pressed={passwordVisible}>
			{#if passwordVisible}
				<Eye />
			{:else}
				<EyeOff />
			{/if}
		</Toggle.Root>
	</Control>

	{#if description}
		<Description>
			{description}
		</Description>
	{/if}

	<FieldErrors />
</Field>
