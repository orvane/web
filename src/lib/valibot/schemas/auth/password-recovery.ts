import * as v from 'valibot'
import { EmailSchema, PasswordSchema } from '.'

export const PasswordRecoveryRequestSchema = v.object({
  email: EmailSchema
})

export const PasswordRecoverySchema = v.pipe(
  v.object({
    password: PasswordSchema,
    repeatPassword: v.string()
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
