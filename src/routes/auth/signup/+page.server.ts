import { fail, message, superValidate } from "sveltekit-superforms";
import { valibot } from "sveltekit-superforms/adapters";
import { SignUpSchema } from "$lib/valibot/schemas/auth/signup";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(valibot(SignUpSchema))
  }
}

export const actions = {
  signup: async ({ request }: { request: Request }) => {
    const form = await superValidate(request, valibot(SignUpSchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    return message(form, "Success")
  }
}
