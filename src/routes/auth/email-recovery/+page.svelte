<script lang="ts">
	import { Field, Control } from 'formsnap';
	import type { PageData } from './$types';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { EmailRecoverySchema } from '$lib/valibot/schemas/auth/email-recovery';
	import { getCountries } from 'libphonenumber-js/max';

	interface EmailRecoveryPageProps {
		data: PageData;
	}

	let { data }: EmailRecoveryPageProps = $props();

	const emailRecoveryForm = superForm(data.emailRecoveryForm, {
		validators: valibotClient(EmailRecoverySchema),
		delayMs: 500,
		timeoutMs: 5000
	});

	const {
		form: emailRecoveryFormData,
		errors: emailRecoveryErrors,
		message: emailRecoveryMessage,
		enhance
	} = emailRecoveryForm;
</script>

<form method="POST" action="?/email-recovery" use:enhance>
	<Field form={emailRecoveryForm} name="countryCode">
		<Control let:attrs>
			<select bind:value={$emailRecoveryFormData.countryCode} {...attrs}>
				{#each getCountries() as country}
					<option value={country}>{country}</option>
				{/each}
			</select>
		</Control>
	</Field>

	<Field form={emailRecoveryForm} name="phoneNumber">
		<Control let:attrs>
			<input bind:value={$emailRecoveryFormData.phoneNumber} {...attrs} />
		</Control>
	</Field>

	<button>Submit</button>
</form>

<SuperDebug data={{ $emailRecoveryFormData, $emailRecoveryErrors, $emailRecoveryMessage }} />
