import './online.css';

export default function Online({user}){

	return(
		<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src={user.profilePicture} alt="" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">{user.username}</span>
				</li>
		)
}