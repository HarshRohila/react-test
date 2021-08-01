import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { LoginForm } from './forms/LoginForm';
import { Navbar } from './components/Navbar';
import { AppRouter } from './AppRouter';
import axios from 'axios';
import { API_URL } from './constants';
import useAsync from './hooks/useAsync';
import api from './utils/api';

function App() {
	// const { value } = useAsync(getLoggedInUser);

	return (
		<div className="App">
			<Navbar />
			<AppRouter />
		</div>
	);
}

// async function getLoggedInUser() {
// 	return api.get(`/users/me`);
// }

export default App;
