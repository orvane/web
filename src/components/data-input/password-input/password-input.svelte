<script lang="ts" generics="T extends Record<string, unknown>">
	import { Control, Description, Field, FieldErrors, Label } from 'formsnap';
	import { Toggle } from 'bits-ui';
	import { Eye, EyeOff } from 'lucide-svelte';

	import { PasswordInputStyles, type PasswordInputProps } from '.';

	let {
		value = $bindable(),
		form,
		name,
		label,
		description,
		size,
		...props
	}: PasswordInputProps<T> = $props();

	let classes = PasswordInputStyles({});

	let passwordVisible = $state(false);
</script>

<div class={classes.root}>
	<Field {form} {name}>
		<Control let:attrs>
			<div class={classes.control}>
				{#if label}
					<Label class={classes.label}>{label}</Label>
				{/if}

				<input
					type={passwordVisible ? 'text' : 'password'}
					bind:value
					class={classes.input}
					{...props}
					{...attrs}
				/>

				<Toggle.Root bind:pressed={passwordVisible} class={classes.toggle}>
					{#if passwordVisible}
						<Eye />
					{:else}
						<EyeOff />
					{/if}
				</Toggle.Root>
			</div>
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
