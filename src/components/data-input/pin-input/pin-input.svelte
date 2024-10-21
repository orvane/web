<script lang="ts" generics="T extends Record<string, unknown>">
	import { PinInput, Label, type PinInputRootSnippetProps } from 'bits-ui';
	import { Control, Field, Label as FormLabel, Description, FieldErrors } from 'formsnap';

	import { PinInputStyles, type PinInputProps } from '.';
	type CellProps = PinInputRootSnippetProps['cells'][0];

	let {
		form,
		name,
		value = $bindable(),

		// Subcomponents
		label,
		labelRef = $bindable(null),
		description,
		descriptionRef = $bindable(null),
		errors,
		errorsRef = $bindable(null)
	}: PinInputProps<T> = $props();

	let classes = PinInputStyles({});
</script>

{#snippet Cell(cell: CellProps)}
	<PinInput.Cell {cell}>
		{#if cell.char !== null}
			<div>{cell.char}</div>
		{/if}

		{#if cell.hasFakeCaret}
			<div>caret</div>
		{/if}
	</PinInput.Cell>
{/snippet}

<div class={classes.root}>
	<Field {form} {name}>
		<Control let:attrs>
			{#if label}
				<FormLabel asChild let:labelAttrs>
					<Label.Root bind:ref={labelRef} class={classes.label} {...labelAttrs}>
						{label}
					</Label.Root>
				</FormLabel>
			{/if}

			<PinInput.Root bind:value maxlength={6} {...attrs}>
				{#snippet children({ cells })}
					{#each cells as cell}
						{@render Cell(cell)}
					{/each}
				{/snippet}
			</PinInput.Root>
		</Control>

		{#if description}
			<Description class={classes.description} let:descriptionAttrs>
				<div bind:this={descriptionRef} class={classes.label} {...descriptionAttrs}>
					{description.value}
				</div>
			</Description>
		{/if}

		<FieldErrors asChild let:errors let:errorAttrs let:fieldErrorsAttrs>
			<div bind:this={errorsRef} class={classes.errors} {...fieldErrorsAttrs}>
				{#each errors as err}
					<span class={classes.error} {...errorAttrs}>{err}</span>
				{/each}
			</div>
		</FieldErrors>
	</Field>
</div>
