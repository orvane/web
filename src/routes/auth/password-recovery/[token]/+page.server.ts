import { fail, message, superValidate } from "sveltekit-superforms";
import { valibot } from "sveltekit-superforms/adapters";
import { PasswordRecoverySchema } from "$lib/valibot/schemas/auth/password-recovery";

import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  const passwordRecoveryForm = await superValidate(valibot(PasswordRecoverySchema))

  return {
    passwordRecoveryForm
  }
}

export const actions: Actions = {
  "password-recovery": async ({ request }: { request: Request }) => {
    const form = await superValidate(request, valibot(PasswordRecoverySchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    return message(form, "Success")
  }
}
