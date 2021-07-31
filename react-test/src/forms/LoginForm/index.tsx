import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../../ui/input';
import LoginValidation from './validation';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import { UserForm } from '../UserForm';
import { Link } from '@reach/router';

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	// const { execute, status } = useAsync(createToken, false);

	// function handleSubmit(loginCreds: LoginCreds) {
	// 	execute(loginCreds);
	// }

	return (
		<>
			<h1>Login</h1>
			<nav>
				<Link to="/">New User? Register</Link>
			</nav>
			{/* <UserForm onSubmit={handleSubmit} /> */}
		</>
	);
};
