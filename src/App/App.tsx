import './App.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route,useLocation,useNavigate } from "react-router-dom";

import { Login } from '../pages/Login';
import { Profile } from '../Profile/Profile';
import { Auth } from '../types';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Invite } from '../pages/Invite/Invite';
import { Signup } from '../pages/Signup/Signup';
import logo from './2c_logo.svg';
import { LOGIN_URL } from '../static-data';
import { v4 as uuidv4 } from 'uuid';

const LS_KEY = 'login:auth';

interface State {
	auth?: Auth;
}

export const App = (): JSX.Element => {
	const [state, setState] = useState<State>({});
	const fetchToken=async()=>{
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body:JSON.stringify({
				"address": uuidv4(),
				"msg":"",
				"signed": ""
			})}
		try{
			fetch(LOGIN_URL,requestOptions).then(function(response) {                      // first then()
				if(response.ok)
				{
				  return response.json();         
				}
		  
				if(response.status!=200){

				}
			}).then((token)=>{
				if(token){
					handleLoggedIn({accessToken:token?.token})
				}
				
			  }).catch(err=>{
				console.log(err)
			
			})
		}catch(e){
			console.log(e)
		}
	
	}
	useEffect(() => {
		// Access token is stored in localstorage
		const ls = window.localStorage.getItem(LS_KEY);
		const auth = ls && JSON.parse(ls);
		setState({ auth });
		fetchToken()
	
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
			
				{!auth&&<Route path="/" element={<Signup title={"Sign Up"} handleLoggedIn={handleLoggedIn}/>} />}
				<Route path="/invite" element={<Invite title={"Invite"} />} />
				
				<Route path="/journal" element={<Dashboard onLoggedOut={handleLoggedOut} />}/>
				<Route path="/profile" element={<Profile auth={auth||{accessToken:""}} onLoggedOut={handleLoggedOut} />} />
				<Route path="/" element={<Login auth={auth} onLoggedIn={handleLoggedIn} />}/>
			</Routes>
		</BrowserRouter>
	);
};
