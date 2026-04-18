
import "./rightbar.css";
import Online from '../online/online.jsx';
import {Users} from '../../dummyData.js';
import { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../context/authContext.js';
import axios from 'axios';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


export default function RightBar({user}){

		const [friends, setFriends]=useState([]);
		const {user:currentUser}=useContext(AuthContext);

	useEffect(()=>{
		const getFriends=async()=>{
			if(!user?._id) return;
			try{
				const friendList=await axios.get("/users/friends/"+ user._id);
				setFriends(friendList.data);
			}
			catch(err){
				console.log(err);
			}
		};
		getFriends();
	},[user]);

	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

const ProfileRightBar=()=>{
		return(
			<>
			{user.username !== currentUser.username && (
				<button className="rightbarFollowButton">
					Follow <AddIcon/>
					</button>
			)}
			<h4 className="rightBarTitle">User Information
			</h4>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">City:
			</span>
			<span className="rightBarDataValue">{user.city}
			</span>
			</div>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">From:
			</span>
			<span className="rightBarDataValue">{user.from}
			</span>
			</div>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">Relationship:
			</span>
			<span className="rightBarDataValue">{user.relationship===1?"Single":user.relationship===2?"Married":"-"}
			</span>
			</div>
			<h4 className="userFriendsHeading">User Friends</h4>
			<div className="userFollowingsCntnr">

			{
				friends?.map((friend)=>(
			<Link key={friend._id} to={`/profile/${friend.username}`} style={{textDecoration:"none"}}>
			<div className="userFollowingItemCntnr">
			<img src={friend.profilePicture ? publicFolder+friend.profilePicture:publicFolder+"person/noAvatar.png" } alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">{friend.username}
			</span>
			</div>
			</Link>
			))}

			</div>


			</>
			)
	}
	const HomeRightBar=()=>{
		return(
		<>
		<div className="birthdayContainer">
				<img src="assets/gift.png" alt="" className="birthdayImg"/>
				<span className="birthdayReminder"><b>Jacky Short </b>and <b>3 others</b> have birthday today.</span>
				
			</div>
			<img src="assets/ad.png" alt="" className="rightbarAd"/>
			<h4 className="onlineTitle">Online Friends</h4>
			<ul className="onlineFriendsList">
			{
				Users.map(u=>(
					<Online key={u.id} user={u}/>))
			}				
				
			</ul>
		</>
		)
	}

return(
	<div className='rightBar'>
		<div className="rightbarWrapper">
			{user ? <ProfileRightBar/>:<HomeRightBar/>}

		</div>
	

	</div>
	)
}




