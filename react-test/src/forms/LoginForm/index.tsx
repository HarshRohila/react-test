import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../../ui/input';
import LoginValidation from './validation';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';

type LoginFormProps = {};

const initialValue = {
	email: '',
	password: '',
};

interface LoginCreds {
	email: string;
	password: string;
}

async function createToken(loginCreds: LoginCreds) {
	return axios.post('/token', loginCreds);
}

export const LoginForm = ({}: LoginFormProps) => {
	const { execute, status } = useAsync(createToken, false);

	function handleSubmit(loginCreds: LoginCreds) {
		execute(loginCreds);
	}

	return (
		<>
			<Formik
				initialValues={initialValue}
				validationSchema={LoginValidation}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<Field type="email" name="email" />

						{errors.email && touched.email ? <div>{errors.email}</div> : null}

						<Field type="password" name="password" />

						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}

						<button type="submit">Submit</button>
						{status === 'pending' && <h1>Loading...</h1>}
					</Form>
				)}
			</Formik>
		</>
	);
};
