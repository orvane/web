<script lang="ts" generics="T extends Record<string, unkown>">
	import { Select } from 'bits-ui';
	import { Control, Field } from 'formsnap';
	import type { SelectInputProps } from '.';

	let { form, name, ...props }: SelectInputProps<T> = $props();
</script>

<Field {form} {name}>
	<Control let:attrs>
		<Select.Root type="single" bind:value {items}>
			<Select.Trigger>Click</Select.Trigger>

			<Select.Portal>
				<Select.Content>
					<Select.ScrollUpButton>button</Select.ScrollUpButton>

					<Select.Viewport>
						<Select.Item>item</Select.Item>

						<Select.Group>
							<Select.Group>
								<Select.GroupHeading />
								<Select.Item />
							</Select.Group>
						</Select.Group>
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	</Control>
</Field>
