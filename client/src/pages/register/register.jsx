import './register.css';
import {useRef} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function RegisterPage(){

	const username=useRef();
	const email=useRef();
	const password=useRef();
	const passwordAgain=useRef();
	const navigate=useNavigate();

	const handleSubmit=async(e)=>{
		e.preventDefault();
		if(passwordAgain.current.value !== password.current.value){
			passwordAgain.current.setCustomValidity("passwords don't match");
		}
		else{
			const user={
				username:username.current.value,
				email:email.current.value,
				password:password.current.value
			}
		try{
			await axios.post("/auth/register", user);
			navigate("/login");
		}
		catch(error){
			console.log(error.response?.data);
		}
		}
	}

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
		<input type="text" placeholder="Username" className="loginInputs" ref={username} required/>
		<input type="email" placeholder="Email" className="loginInputs" ref={email} required/>
		<input type="password" placeholder="Password" className="loginInputs" ref={password} required minLength="6"/>
		<input type="password" placeholder="Confirm Password" className="loginInputs" ref={passwordAgain} required/>
		<button className="registerButton" type="Submit">Sign Up</button>
		<Link to="/login">
		<button className="loginButton">
		Log into Account
		</button>
		</Link>
		</form>

		</div>
		</div>

		</div>
		)
}