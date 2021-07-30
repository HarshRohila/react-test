import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../../ui/input';
import LoginValidation from './validation';

type LoginFormProps = {};

const initialValue = {
	email: '',
	password: '',
};

export const LoginForm = ({}: LoginFormProps) => (
	<>
		<Formik
			initialValues={initialValue}
			validationSchema={LoginValidation}
			onSubmit={(values) => {
				console.log(values);
			}}
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
				</Form>
			)}
		</Formik>
	</>
);
