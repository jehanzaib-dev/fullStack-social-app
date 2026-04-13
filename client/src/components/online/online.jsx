import './online.css';

export default function Online({user}){

	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	return(
		<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src={publicFolder+user.profilePicture} alt="" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">{user.username}</span>
				</li>
		)
}