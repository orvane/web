import * as v from 'valibot'
import { EmailSchema, PasswordLooseSchema } from '.'

export const SignInSchema = v.object({
  email: EmailSchema,
  password: PasswordLooseSchema,
  rememberMe: v.boolean()
})
