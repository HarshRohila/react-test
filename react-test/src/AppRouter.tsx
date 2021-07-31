import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';

type AppRouterProps = {};

export const AppRouter = ({}: AppRouterProps) => {
	return (
		<Router>
			<RouterPage path="/" pageComponent={<Home />} />
			<RouterPage path="dashboard" pageComponent={<Dashboard />} />
			<RouterPage path="login" pageComponent={<LoginPage />} />
		</Router>
	);
};

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
