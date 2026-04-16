import './login.css';
import {useRef, useContext} from 'react';
import {LoginCall} from '../../apiCalls.js';
import {AuthContext} from '../../context/authContext';
import CircularProgress from '@mui/material/CircularProgress';


export default function LoginPage(){
	const email=useRef();
	const password=useRef();
	const {user, isFetching, error, dispatch}=useContext(AuthContext);


	const handleSubmit=(e)=>{
		e.preventDefault();
		LoginCall({email:email.current.value, password:password.current.value},dispatch);
	}
	console.log(user);

	return(
		<div className="loginPageCntnr">
		<div className="loginWrapper">
		<div className="wrapperLeft">
		<h3 className="loginLogoHeading">My Social</h3>
		<span className="loginDescription">Connect with friends and the world around you on MySocial
		</span>
		</div>
		<div className="wrapperRight">
		<form className="loginBox" onSubmit={handleSubmit}>
		<input type="email" placeholder="Email" required className="loginInputs" ref={email}/>
		<input type="password" placeholder="Password" required minLength="6" className="loginInputs" ref={password}/>
		<button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" aria-label="Loading…"/>:"Log In"}</button>
		<span className="forgotPasswordSpan">Forgot Password?
		</span>
		<button className="registerButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" aria-label="Loading…"/>:"Create New Account"}</button>
		</form>
		</div>
		</div>


		</div>
		)
}