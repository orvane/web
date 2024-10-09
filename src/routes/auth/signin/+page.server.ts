import { fail, message, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { SignInSchema } from '$lib/valibot/schemas/auth/signin';

import type { PageServerLoad, RequestEvent } from '../signin/$types';

export const load: PageServerLoad = async () => {
  const signInForm = await superValidate(valibot(SignInSchema));

  return {
    signInForm
  };
};

export const actions = {
  signin: async (event: RequestEvent) => {
    const form = await superValidate(event.request, valibot(SignInSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, 'Success');

  }
};
