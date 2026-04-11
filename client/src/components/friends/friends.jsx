import "./friends.css";

export default function Friends({user}){

	return(
		<li className="sidebarFriendListItem">
			<img src={user.profilePicture} alt="" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">{user.username}</span>
			</li>
		)
}