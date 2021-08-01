import React from 'react';
import { Router, Link, RouteComponentProps, useNavigate } from '@reach/router';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import api from './utils/api';
import { Loader } from './components/Loader';
import useAsync from './hooks/useAsync';

type AppRouterProps = {};

export const AppRouter = ({}: AppRouterProps) => {
	return (
		<Router>
			<RouterPage path="/" pageComponent={<Home />} />
			<AuthRouterPage path="dashboard" pageComponent={<Dashboard />} />
			<RouterPage path="login" pageComponent={<LoginPage />} />
		</Router>
	);
};

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => {
	return props.pageComponent;
};

const AuthRouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => {
	const { status } = useAsync(getLoggedInUser);
	const navigate = useNavigate();

	return (
		<>
			{status === 'pending' && <Loader />}
			{status === 'success' && props.pageComponent}
			{status === 'error' && navigate('/login') && <></>}
		</>
	);
};

async function getLoggedInUser() {
	return api.get(`/users/me`);
}
