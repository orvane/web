<script lang="ts">
	import { SignUpSchema } from '$lib/valibot/schemas/auth/signup';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Control, Field } from 'formsnap';

	import type { PageData } from './$types';

	interface AuthLayoutProps {
		data: PageData;
	}

	let { data }: AuthLayoutProps = $props();

	const signUpForm = superForm(data.signupForm, {
		validators: valibotClient(SignUpSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const {
		form: signUpFormData,
		errors: signUpErrors,
		message: signUpMessage,
		enhance
	} = signUpForm;
</script>

<form method="POST" action="?/signup" use:enhance>
	<Field form={signUpForm} name="email">
		<Control let:attrs>
			<input type="email" bind:value={$signUpFormData.email} autocomplete="email" {...attrs} />
		</Control>
	</Field>

	<Field form={signUpForm} name="password">
		<Control let:attrs>
			<input
				type="password"
				bind:value={$signUpFormData.password}
				autocomplete="new-password"
				{...attrs}
			/>
		</Control>
	</Field>

	<Field form={signUpForm} name="repeatPassword">
		<Control let:attrs>
			<input
				type="password"
				bind:value={$signUpFormData.repeatPassword}
				autocomplete="new-password"
				{...attrs}
			/>
		</Control>
	</Field>

	<Field form={signUpForm} name="termsAgreement">
		<Control let:attrs>
			<input type="checkbox" bind:checked={$signUpFormData.termsAgreement} name={attrs.name} />
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug data={{ $signUpFormData, $signUpErrors, $signUpMessage }} />
