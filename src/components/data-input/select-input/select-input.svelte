<script lang="ts" generics="T extends Record<string, unknown>, M extends boolean">
	import { Select, Label } from 'bits-ui';
	import { Control, Field, Label as FormLabel, FieldErrors, Description } from 'formsnap';

	import { SelectInputStyles, type SelectInputProps } from '.';

	// TODO: Make the props more concise (put element props inside childrenProps), and think up a solution for refs
	let {
		value = $bindable(),
		multiple,
		form,
		name,
		items,
		placeholder,

		// Subcomponents
		label,
		labelRef = $bindable(null),
		trigger,
		triggerRef = $bindable(null),
		content,
		contentRef = $bindable(null),
		description,
		descriptionRef = $bindable(null),
		errors,
		errorsRef = $bindable(null),
		...props
	}: SelectInputProps<T, M> = $props();

	const type = $derived(multiple ? 'multiple' : 'single');
	const classes = SelectInputStyles({});

	$effect(() => {
		console.log(value);
	});
</script>

<div class={classes.root}>
	<Field {form} {name}>
		{#if label}
			<FormLabel asChild let:labelAttrs>
				<Label.Root bind:ref={labelRef} class={classes.label} {...labelAttrs}>
					{label}
				</Label.Root>
			</FormLabel>
		{/if}

		<Control let:attrs>
			<div class={classes.control}>
				<!-- IMPORTANT: value as never is the only "good" solution that makes the typescript shut up (false-positive) -->
				<Select.Root {type} bind:value={value as never} {...attrs} {...props}>
					<Select.Trigger bind:ref={triggerRef} class={classes.trigger} {...trigger}>
						{#snippet children()}
							{#if multiple}
								{Array.isArray(value) && value.length
									? value.join(', ')
									: trigger?.placeholder || 'Select...'}
							{:else}
								{value || trigger?.placeholder || 'Select...'}
							{/if}
						{/snippet}
					</Select.Trigger>

					<Select.Portal>
						<Select.Content bind:ref={contentRef} class={classes.content} {...content}>
							{#each items as item (item.value)}
								<!-- TODO: Bind needs fixing waiting for the response from the Svelte team -->
								<Select.Item class={classes.item} {...item}>
									{#snippet children({ selected })}
										{selected ? 'YEP' : 'NOPE'}
										<div>
											{item.label}
										</div>
									{/snippet}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Portal>
				</Select.Root>
			</div>
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
