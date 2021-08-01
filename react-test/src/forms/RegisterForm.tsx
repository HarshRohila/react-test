import React, { useEffect, useState } from 'react';
import { UserForm } from './UserForm';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import { API_URL } from '../constants';
import { useNavigate } from '@reach/router';

type RegisterFormProps = {};

interface LoginCreds {
	email: string;
	password: string;
}

async function creatUser(loginCreds: LoginCreds) {
	return axios.post(`${API_URL}/users`, loginCreds);
}

export const RegisterForm = ({}: RegisterFormProps) => {
	const { execute, status } = useAsync(creatUser, false);

	function handleSubmit(loginCreds: LoginCreds) {
		execute(loginCreds);
	}

	const navigate = useNavigate();

	return (
		<>
			<h1>Register</h1>
			<UserForm
				onSubmit={handleSubmit}
				isSubmitLoading={status === 'pending'}
			/>
			{status === 'success' &&
				alert('Registered, going to login page') &&
				navigate('login') && <></>}
			{status === 'error' && alert('Error') && <></>}
		</>
	);
};
