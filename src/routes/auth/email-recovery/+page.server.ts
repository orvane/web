import { fail, message, superValidate } from "sveltekit-superforms";
import type { PageServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { EmailRecoverySchema } from "$lib/valibot/schemas/auth/email-recovery";

export const load: PageServerLoad = async () => {
  const emailRecoveryForm = await superValidate(valibot(EmailRecoverySchema));

  return {
    emailRecoveryForm
  };
};

export const actions = {
  "email-recovery": async ({ request }: { request: Request }) => {
    const form = await superValidate(request, valibot(EmailRecoverySchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, 'Success');
  }
};
