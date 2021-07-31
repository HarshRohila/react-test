import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import LoginValidation from './LoginForm/validation';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';

const initialValue = {
	email: '',
	password: '',
};

type UserFormProps = {
	onSubmit: (loginCreds: typeof initialValue) => void;
};

export const UserForm = ({ onSubmit }: UserFormProps) => {
	return (
		<div className="card">
			<div className="card-body">
				<Formik
					initialValues={initialValue}
					validationSchema={LoginValidation}
					onSubmit={onSubmit}
				>
					{({ errors, touched }) => (
						<Form>
							<Field
								component={Input}
								type="email"
								name="email"
								label="Email"
							/>
							{errors.email && touched.email ? <div>{errors.email}</div> : null}
							<Field
								component={Input}
								type="password"
								name="password"
								label="Password"
							/>
							{errors.password && touched.password ? (
								<div>{errors.password}</div>
							) : null}
							<Button type="submit">Submit</Button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
