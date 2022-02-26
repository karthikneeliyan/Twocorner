import './App.css';

import React, { useEffect, useState } from 'react';

import { Login } from '../Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
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
		console.log("sfsdfdsfdfds");
		console.log(ls)	
		console.log("erro")
		const auth = ls && JSON.parse(ls);
		console.log("coming after parse")
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
		<div className="App">
			<header className="">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="Twocorners">Twocorners</div>
			</header>
			<div className="App-intro">
				{auth ? (
					<Profile auth={auth} onLoggedOut={handleLoggedOut} />
				) : (
					<Login onLoggedIn={handleLoggedIn} />
				)}
			</div>
		</div>
	);
};
