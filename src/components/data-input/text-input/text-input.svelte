<script lang="ts" generics="T extends Record<string, unknown>">
	import { Field, FieldErrors, Control, Label as FormLabel, Description } from 'formsnap';
	import { Label } from 'bits-ui';

	import { TextInputStyles, type TextInputProps } from '.';

	let {
		value = $bindable(''),
		form,
		name,
		ref = $bindable(null),
		label,
		labelRef = $bindable(null),
		description,
		size,
		...props
	}: TextInputProps<T> = $props();

	const classes = TextInputStyles({});
</script>

<div class={classes.root}>
	<Field {form} {name}>
		<Control let:attrs>
			<div class={classes.control}>
				{#if label}
					<FormLabel asChild let:labelAttrs>
						<Label.Root bind:ref={labelRef} class={classes.label} {...labelAttrs}>
							{label}
						</Label.Root>
					</FormLabel>
				{/if}

				<input type="text" bind:value bind:this={ref} class={classes.input} {...props} {...attrs} />
			</div>
		</Control>

		{#if description}
			<Description class={classes.description}>
				{description}
			</Description>
		{/if}

		<!-- TODO: Create a custom errors component -->
		<FieldErrors class={classes.errors} let:errors let:errorAttrs>
			{#each errors as err}
				<span class={classes.error} {...errorAttrs}>{err}</span>
			{/each}
		</FieldErrors>
	</Field>
</div>
