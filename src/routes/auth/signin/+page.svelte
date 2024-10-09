<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { SignInSchema } from '$lib/valibot/schemas/auth/signin';
	import { Control, Field } from 'formsnap';
	import type { PageData } from './$types';

	interface SignInPageProps {
		data: PageData;
	}

	let { data }: SignInPageProps = $props();

	const signInForm = superForm(data.signInForm, {
		validators: valibotClient(SignInSchema)
	});

	const { form: signInFormData, enhance } = signInForm;
</script>

<form method="POST" action="?/signin" use:enhance>
	<Field form={signInForm} name="email">
		<Control let:attrs>
			<input bind:value={$signInFormData.email} {...attrs} />
		</Control>
	</Field>

	<Field form={signInForm} name="password">
		<Control let:attrs>
			<input bind:value={$signInFormData.password} {...attrs} />
		</Control>
	</Field>

	<Field form={signInForm} name="rememberMe">
		<Control let:attrs>
			<input type="checkbox" bind:checked={$signInFormData.rememberMe} {...attrs} />
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug data={$signInFormData} />
