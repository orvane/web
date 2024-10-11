<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { EmailVerificationSchema } from '$lib/valibot/schemas/auth/email-verification';
	import { Control, Field } from 'formsnap';
	import type { PageData } from './$types';

	interface EmailVerificationPageProps {
		data: PageData;
	}

	let { data }: EmailVerificationPageProps = $props();

	const emailVerificationForm = superForm(data.emailVerificationForm, {
		validators: valibotClient(EmailVerificationSchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const {
		form: emailVerificationFormData,
		errors: emailVerificationErrors,
		message: emailVerificationMessage,
		enhance
	} = emailVerificationForm;
</script>

<form method="POST" action="?/email-recovery" use:enhance>
	<Field form={emailVerificationForm} name="code">
		<Control let:attrs>
			<input
				bind:value={$emailVerificationFormData.code}
				{...attrs}
				maxLength="8"
				pattern="[0-9]{8}"
			/>
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug
	data={{ $emailVerificationFormData, $emailVerificationErrors, $emailVerificationMessage }}
/>
