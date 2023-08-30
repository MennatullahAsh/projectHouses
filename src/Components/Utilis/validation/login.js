import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'password must be at least 6 char')
    .required('password is required'),
});

export default validationSchema;