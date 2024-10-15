<script lang="ts" generics="T extends Record<string, unknown>">
	import { Field, FieldErrors, Control, Label, Description } from 'formsnap';

	import { TextInputStyles, type TextInputProps } from '.';

	let {
		value = $bindable(),
		form,
		name,
		label,
		description,
		size,
		...props
	}: TextInputProps<T> = $props();

	const styles = TextInputStyles({});
</script>

<div class={styles.root}>
	<Field {form} {name}>
		<Control let:attrs>
			<div class={styles.control}>
				{#if label}
					<Label class={styles.label}>{label}</Label>
				{/if}

				<input type="text" bind:value class={styles.input} {...props} {...attrs} />
			</div>
		</Control>

		{#if description}
			<Description class={styles.description}>
				{description}
			</Description>
		{/if}

		<!-- TODO: Create a custom errors component -->
		<FieldErrors class={styles.errors} let:errors let:errorAttrs>
			{#each errors as err}
				<span class={styles.error} {...errorAttrs}>{err}</span>
			{/each}
		</FieldErrors>
	</Field>
</div>
