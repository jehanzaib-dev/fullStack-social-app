import "./profile.css";
import TopBar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import RightBar from '../../components/rightbar/rightbar.jsx';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';




export default function ProfilePage(){
	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	const [user, setUser]=useState({});
	const username=useParams().username;

	useEffect(()=>{
		const fetchUser=async()=>{
		const response=await axios.get(`/users?username=${username}`);
		
		setUser(response.data.user);
		}
		fetchUser();
	},[]);

	return(
		<>
		<TopBar/>
		<div className="profileContainer">
			<Sidebar/>
			<div className="profileRight">
			<div className="profileRightTop">
			<div className="profileTopImagesCntnr">
			<img src={user.coverPicture || publicFolder+"person/noCover.png"} alt="" className="profileCoverImg"/>
			<img src={user.profilePicture || publicFolder+"person/noAvatar.png"} alt="" className="profilePicImg"/>

			</div>
			<div className="profileTopTextCntnr">
			<h4 className="profileUsername">{user.username}</h4>
			<span className="profileUserDesc">{user.desc}</span>
			</div>

			</div>
			<div className="profileRightBottom">
			<Feed username={username}/>
			<RightBar user={user}/>
			</div>

			</div>
			
		</div>
		</>
		)
}












