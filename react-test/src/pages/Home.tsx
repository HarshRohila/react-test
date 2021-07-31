import React from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Link } from '@reach/router';
import { RegisterForm } from '../forms/RegisterForm';

type HomeProps = {};

export const Home = ({}: HomeProps) => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<RegisterForm />
						<nav>
							<Link to="login">Already registered? Log in</Link>
						</nav>
					</div>
				</div>
				<nav>
					<Link to="dashboard">Dashboard</Link>
				</nav>
			</div>
		</>
	);
};
