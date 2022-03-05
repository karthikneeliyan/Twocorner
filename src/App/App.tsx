import './App.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from '../pages/Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Invite } from '../pages/Invite/Invite';
import { Signup } from '../pages/Signup/Signup';
import logo from './2c_logo.svg';

const LS_KEY = 'login:auth';

interface State {
	auth?: Auth;
}

export const App = (): JSX.Element => {
	const [state, setState] = useState<State>({});

	useEffect(() => {
		// Access token is stored in localstorage
		const ls = window.localStorage.getItem(LS_KEY);
		const auth = ls && JSON.parse(ls);
		setState({ auth });
	}, []);

	const handleLoggedIn = (auth: Auth) => {
		localStorage.setItem(LS_KEY, JSON.stringify(auth));
		setState({ auth });
	};

	const handleLoggedOut = () => {
		localStorage.removeItem(LS_KEY);
		setState({ auth: undefined });
	};

	const { auth } = state;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Signup title={"Sign Up"} />} />
				<Route path="/invite" element={<Invite title={"Invite"} />} />
				{auth ? (
					<Route path="/" element={<Profile auth={auth} onLoggedOut={handleLoggedOut} />} />
				) : (
					<Route path="/login" element={<Login onLoggedIn={handleLoggedIn} />}/>
				)}
				<Route path="/journal" element={<Dashboard />}/>
			</Routes>
		</BrowserRouter>
	);
};
