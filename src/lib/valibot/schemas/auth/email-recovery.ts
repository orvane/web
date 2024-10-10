import * as v from 'valibot';
import { isValidPhoneNumber } from 'libphonenumber-js/max';

import { PhoneNumberSchema } from '.';

export const EmailRecoverySchema = v.pipe(
  v.object({
    countryCode: PhoneNumberSchema,
    phoneNumber: v.string(),
  }),
  v.check((input) => {
    return isValidPhoneNumber(input.phoneNumber, input.countryCode)
  }, "Please proved a valid phone number")
);
