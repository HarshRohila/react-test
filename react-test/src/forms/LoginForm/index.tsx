import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../../ui/input';
import LoginValidation from './validation';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import { LoginCreds, UserForm } from '../UserForm';
import { Link } from '@reach/router';
import { API_URL } from '../../constants';

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	const { execute, status } = useAsync(login, false);

	function handleSubmit(loginCreds: LoginCreds) {
		execute(loginCreds);
	}

	return (
		<>
			<h1>Login</h1>
			<UserForm
				onSubmit={handleSubmit}
				isSubmitLoading={status === 'pending'}
			/>
			<nav>
				<Link to="/">New User? Register</Link>
			</nav>
		</>
	);
};

async function login(loginCreds: LoginCreds) {
	return axios.post(`${API_URL}/auth/login`, loginCreds);
}
