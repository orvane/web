import { fail, message, superValidate } from "sveltekit-superforms";
import { valibot } from "sveltekit-superforms/adapters";
import { PasswordRecoveryRequestSchema } from "$lib/valibot/schemas/auth/password-recovery";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const passwordRecoveryRequestForm = await superValidate(valibot(PasswordRecoveryRequestSchema))

  return {
    passwordRecoveryRequestForm
  }
}

export const actions = {
  'password-recovery-request': async ({ request }: { request: Request }) => {
    const form = await superValidate(request, valibot(PasswordRecoveryRequestSchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    return message(form, "Success")
  }
}
