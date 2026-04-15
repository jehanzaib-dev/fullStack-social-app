import './login.css';
import {useRef} from 'react';



export default function LoginPage(){
	const email=useRef();
	const password=useRef();


	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(email.current.value);
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
		<input type="email" placeholder="Email" required className="loginInputs" ref={email}/>
		<input type="password" placeholder="Password" required minLength="6" className="loginInputs" ref={password}/>
		<button className="loginButton">Log In</button>
		<span className="forgotPasswordSpan">Forgot Password?
		</span>
		<button className="registerButton">Create a New Account</button>
		</form>
		</div>
		</div>


		</div>
		)
}