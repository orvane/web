<script lang="ts">
	import { SignUpSchema } from '$lib/valibot/schemas/auth/signup';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Control, Field } from 'formsnap';

	import type { PageData } from './$types';

	interface AuthLayoutProps {
		data: PageData;
	}

	let { data }: AuthLayoutProps = $props();

	const form = superForm(data.form, {
		validators: valibotClient(SignUpSchema),
		onSubmit: ({ formData }) => {
			console.log(formData);
		}
	});

	const { form: formData, enhance } = form;
</script>

<form action="signup" method="POST" use:enhance>
	<Field {form} name="email">
		<Control let:attrs>
			<input type="email" bind:value={$formData.email} {...attrs} />
		</Control>
	</Field>

	<Field {form} name="password">
		<Control let:attrs>
			<input type="password" bind:value={$formData.password} {...attrs} />
		</Control>
	</Field>

	<Field {form} name="repeatPassword">
		<Control let:attrs>
			<input type="password" bind:value={$formData.repeatPassword} {...attrs} />
		</Control>
	</Field>

	<button>Submit</button>
</form>
