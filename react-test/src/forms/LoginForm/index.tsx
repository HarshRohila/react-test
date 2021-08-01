import React from 'react';
import useAsync from '../../hooks/useAsync';
import { LoginCreds, UserForm } from '../UserForm';
import { Link, useNavigate } from '@reach/router';
import api from '../../utils/api';

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	const { execute, status } = useAsync(login, false);
	const navigate = useNavigate();

	function handleSubmit(loginCreds: LoginCreds) {
		execute(loginCreds)
			.then(() => {
				navigate('dashboard');
			})
			.catch((err) => {
				alert('Login Failed');
				console.error(err);
			});
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
	return api.post(`/auth/login`, loginCreds);
}
