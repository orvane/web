import * as v from 'valibot'
import { EmailSchema } from '.'

export const PasswordRecoveryRequestSchema = v.object({
  email: EmailSchema
})
