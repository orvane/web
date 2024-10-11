import { fail, message, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { valibot } from 'sveltekit-superforms/adapters';
import { EmailVerificationSchema } from '$lib/valibot/schemas/auth/email-verification';

export const load: PageServerLoad = async () => {
	const emailVerificationForm = await superValidate(valibot(EmailVerificationSchema));

	return {
		emailVerificationForm
	};
};

export const actions = {
	'email-verification': async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(EmailVerificationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, 'Success');
	}
};
