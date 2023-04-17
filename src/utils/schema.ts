import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter correct email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Passwords must be at least ${min} characters`)
    .max(16, ({max}) => `Passwords must be at maximum ${max} characters`)
    .required('Passwords is required'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //   'Passwords must have both letters and numbers',
  // ),
});
