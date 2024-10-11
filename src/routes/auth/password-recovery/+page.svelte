<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Control, Field } from 'formsnap';
	import { PasswordRecoveryRequestSchema } from '$lib/valibot/schemas/auth/password-recovery';

	import type { PageData } from './$types';

	interface PasswordRecoveryRequestPageProps {
		data: PageData;
	}

	let { data }: PasswordRecoveryRequestPageProps = $props();

	const passwordRecoveryRequestForm = superForm(data.passwordRecoveryRequestForm, {
		validators: valibotClient(PasswordRecoveryRequestSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const {
		form: passwordRecoveryRequestFormData,
		errors: passwordRecoveryRequestErrors,
		message: passwordRecoveryRequestMessage,
		enhance
	} = passwordRecoveryRequestForm;
</script>

<form method="POST" action="?/password-recovery-request" use:enhance>
	<Field form={passwordRecoveryRequestForm} name="email">
		<Control let:attrs>
			<input bind:value={$passwordRecoveryRequestFormData.email} {...attrs} />
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug
	data={{
		$passwordRecoveryRequestFormData,
		$passwordRecoveryRequestErrors,
		$passwordRecoveryRequestMessage
	}}
/>
