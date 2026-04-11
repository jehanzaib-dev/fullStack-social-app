import './register.css';

export default function RegisterPage(){

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
		<input type="text" placeholder="Username" className="loginInputs"/>
		<input type="email" placeholder="Email" className="loginInputs"/>
		<input type="password" placeholder="Password" className="loginInputs"/>
		<input type="password" placeholder="Confirm Password" className="loginInputs"/>
		<button className="loginButton">Sign Up</button>
		<button className="registerButton">Log into Account</button>


		</div>
		</div>
		</div>


		</div>
		)
}