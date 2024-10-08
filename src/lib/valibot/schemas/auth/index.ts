import * as v from 'valibot';

export const EmailSchema = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your email"),
  v.email("Email is badly formatted"),
  v.maxLength(254, "Your email is too long")
)

// TODO - Make sure the schema is secure and doesn't allow any unwanted/unpredicted characters
export const PasswordSchema = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your password"),
  v.minLength(8, "Your password is too short"),
  v.maxLength(128, "Your password is too long"),
  v.regex(/[a-z]/, "Your password must contain a lowercase letter"),
  v.regex(/[A-z]/, "Your password must contain a uppercase letter"),
  v.regex(/[0-9]/, "Your password must conaint a number")
)
