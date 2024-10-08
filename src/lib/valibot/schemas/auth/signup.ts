import * as v from 'valibot';
import { EmailSchema, PasswordSchema } from '.';

export const SignUpSchema = v.pipe(
  v.object({
    email: EmailSchema,
    password: PasswordSchema,
    repeatPassword: v.string(),
    termsAgreement: v.literal(true as boolean, "You must agree to the terms and conditions")
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['repeatPassword']],
      (input) => input.password === input.repeatPassword,
      "Passwords do not match"
    ),
    ['repeatPassword']
  )
)
