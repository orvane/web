<script lang="ts">
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { PasswordRecoverySchema } from '$lib/valibot/schemas/auth/password-recovery';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { Control, Field } from 'formsnap';

	import type { PageData } from './$types';

	interface PasswordRecoveryPageProps {
		data: PageData;
	}

	let { data }: PasswordRecoveryPageProps = $props();

	const passwordRecoveryForm = superForm(data.passwordRecoveryForm, {
		validators: valibotClient(PasswordRecoverySchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const {
		form: passwordRecoveryFormData,
		errors: passwordRecoveryErrors,
		message: passwordRecoveryMessage,
		enhance
	} = passwordRecoveryForm;
</script>

<form method="POST" action="?/password-recovery" use:enhance>
	<Field form={passwordRecoveryForm} name="password">
		<Control let:attrs>
			<input bind:value={$passwordRecoveryFormData.password} {...attrs} />
		</Control>
	</Field>

	<Field form={passwordRecoveryForm} name="repeatPassword">
		<Control let:attrs>
			<input bind:value={$passwordRecoveryFormData.repeatPassword} {...attrs} />
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug
	data={{ $passwordRecoveryFormData, $passwordRecoveryErrors, $passwordRecoveryMessage }}
/>
