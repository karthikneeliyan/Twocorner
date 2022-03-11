import "./Login.css";
import { Auth } from "../../types";
import React, { useState } from "react";
import Web3 from "web3";
import metamask from "./metamask-fox.svg";
import logo from "./../../App/2c_logo.svg";
import { JWT, getUser, getGroup, GROUP_URL } from "../../static-data";
import { useNavigate } from "react-router-dom";
declare var window: any;

interface Props {
  onLoggedIn: (auth: Auth) => void;
  auth:any;
}

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

export const Login = ({ onLoggedIn,auth }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false); // Loading button state
  const [users, setUsers] = useState([]); // Loading button state

  const navigate = useNavigate();
  const handleAuthenticate = ({
    publicAddress,
    signature,
  }: {
    publicAddress: string;
    signature: string;
  }) =>
    fetch(`${process.env.NODE_API_URL}/auth`, {
      body: JSON.stringify({ publicAddress, signature }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => response.json());

  const handleSignMessage = async ({
    publicAddress,
    nonce,
  }: {
    publicAddress: string;
    nonce: string;
  }) => {
    try {
      web3 = new Web3(window.ethereum);
      const signature = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        publicAddress,
        "" // MetaMask will ignore the password argument here
      );
      console.log("publicAddress", publicAddress);
      console.log("signature", signature);
      return { publicAddress, signature };
    } catch (err) {
      throw new Error("You need to sign the message to be able to log in.");
    }
  };

  const handleSignup = (publicAddress: string) =>
    fetch(`${process.env.NODE_API_URL}/users`, {
      body: JSON.stringify({ publicAddress }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => response.json());

  const handleClick = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      window.alert("Please install MetaMask first.");
      return;
    }

    if (!web3) {
      try {
        // Request account access if needed
        await window.ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
        return;
      }
    }

    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert("Please activate MetaMask first.");
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    setLoading(true);

    // Look if user with current publicAddress is already present on backend
    fetch(`${process.env.NODE_API_URL}/users?publicAddress=${publicAddress}`)
      .then((response) => response.json())
      // If yes, retrieve it. If no, create it.
      .then((users) => (users.length ? users[0] : handleSignup(publicAddress)))
      // Popup MetaMask confirmation modal to sign message
      .then(handleSignMessage)
      // Send signature to backend on the /auth route
      .then(handleAuthenticate)
      // Pass accessToken back to parent component (to save it in localStorage)
      .then(onLoggedIn)
      .catch((err) => {
        window.alert(err);
        setLoading(false);
      });
  };

  const handleStaticLogin = async () => {
    // onLoggedIn({ accessToken: JWT });
    try{
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',"authorization": auth.accessToken},
       }
      fetch(GROUP_URL,requestOptions).then(function(response) {                      // first then()
        if(response.ok)
        {
          return response.json();         
        }
      
        if(response.status!=200){
  
        }
      }).then(({users})=>{
      if(users.length){
        navigate("/journal");
      }else{
        navigate("/invite");
      }
      }).catch(err=>{
        console.log(err)
      
      })
    }catch(e){
      console.log(e)
    }
   
    
  };

  return (
    <div className="Login App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Twocorners">Twocorners</div>
      </header>
      <p className="login__heading">Private Spaces, Unique Conversations</p>
      <div>
        <p className="login__signin">Sign-in</p>
        <button className="login__button" onClick={handleStaticLogin}>
          <div className="login__metamask">
            <img src={metamask} alt="Metamask" />
            {loading ? "Loading..." : "METAMASK"}
          </div>
        </button>
      </div>
    </div>
  );
};
