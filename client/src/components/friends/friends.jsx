import "./friends.css";

export default function Friends({user}){

	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	return(
		<li className="sidebarFriendListItem">
			<img src={publicFolder+user.profilePicture} alt="" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">{user.username}</span>
			</li>
		)
}