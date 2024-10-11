import * as v from 'valibot';

export const EmailVerificationSchema = v.object({
  code: v.pipe(
    v.string(),
    v.length(8, "Verification code must be 8 numbers long"),
    v.regex(/[0-9]/, "Verification code must contain numbers only")
  )
});
