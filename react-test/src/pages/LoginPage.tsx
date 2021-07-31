import React from 'react';
import { LoginForm } from '../forms/LoginForm';

type LoginPageProps = {};

export const LoginPage = ({}: LoginPageProps) => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<LoginForm />
				</div>
			</div>
		</>
	);
};
