import React, { useEffect, useState } from 'react';
import { UserForm } from './UserForm';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

type RegisterFormProps = {};

interface LoginCreds {
	email: string;
	password: string;
}

async function createToken(loginCreds: LoginCreds) {
	return axios.post('http://localhost:4000/api/token', loginCreds);
}

export const RegisterForm = ({}: RegisterFormProps) => {
	const { execute } = useAsync(createToken, false);

	function handleSubmit(loginCreds: LoginCreds) {
		debugger;
		execute(loginCreds);
	}

	return (
		<>
			<h1>Register</h1>
			<UserForm onSubmit={handleSubmit} />
		</>
	);
};
