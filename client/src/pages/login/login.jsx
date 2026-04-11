import './login.css';

export default function LoginPage(){

	return(
		<div className="loginPageCntnr">
		<div className="loginWrapper">
		<div className="wrapperLeft">
		<h3 className="loginLogoHeading">My Social</h3>
		<span className="loginDescription">Connect with friends and the world around you on MySocial
		</span>
		</div>
		<div className="wrapperRight">
		<div className="loginBox">
		<input type="email" placeholder="Email" className="loginInputs"/>
		<input type="password" placeholder="Email" className="loginInputs"/>
		<button className="loginButton">Log In</button>
		<span className="forgotPasswordSpan">Forgot Password?
		</span>
		<button className="registerButton">Create a New Account</button>


		</div>
		</div>
		</div>


		</div>
		)
}