import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),

	password: Yup.string()
		.min(8, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});

export default LoginValidation;
