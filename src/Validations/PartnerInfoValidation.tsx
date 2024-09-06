import * as yup from 'yup';
import { isPLFTaken } from '../Requests/plf';

export const partnerValidation = yup.object({
  name: yup
    .string()
    .required('Partner name is required')
    .min(3, 'Partner name must have at least 3 characters.'),
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Phone number must be the format xxx-xxx-xxxx'
    ),
  accountID: yup.number().required('Account ID is required'),
  plf: yup
    .string()
    .required()
    .test({
      message: 'PLF taken',
      test: (value, context) => isPLFTaken(value),
    }),
});
