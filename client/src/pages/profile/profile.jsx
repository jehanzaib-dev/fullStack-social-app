import "./profile.css";
import TopBar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Post from "../../components/post/post.jsx";
import Share from "../../components/share/share.jsx";
import RightBar from '../../components/rightbar/rightbar.jsx';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js"; 




export default function ProfilePage(){
	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	const {user:currentUser}=useContext(AuthContext);
	

	const [user, setUser]=useState({});
	const [posts, setPosts]=useState([]);
	const username=useParams().username;

	useEffect(()=>{
		const fetchUser=async()=>{
		const response=await axios.get(`/users?username=${username}`);
		
		setUser(response.data.user);
		}
		fetchUser();
	},[username])

		useEffect(() => {
  		const fetchPosts = async () => {
    	const res = await axios.get(`/posts/profile/${username}`);
    	setPosts(res.data);
  	};
		fetchPosts();
	},[username]);

	return(
		<>
		<TopBar/>
		<div className="profileContainer">
		<Sidebar/>
		<div className="profileRight">
		<div className="profileRightTop">
		<div className="profileRightTopImagesCntnr">
			<img src={user.coverPicture ? publicFolder + user.coverPicture: publicFolder + "person/noCover.png"} alt="" className="profileCoverImg"/>
			<img src={user.profilePicture ? publicFolder + user.profilePicture: publicFolder + "person/noAvatar.png"} alt="" className="profilePicImg"/>
		</div>
		<div className="profileRightTopTextCntnr">
            <h4 className="profileUsername">{user.username}</h4>
            <span className="profileUserDesc">{user.desc}</span>
            </div>
		</div>
		<div className="profileRightBottom">
		<div className="postsCntnr">
		{currentUser?.username===username &&<Share/>}
		{posts?.map((post) => (
            <Post key={post._id} post={post} />
            ))}
		</div>
		<RightBar user={user}/>
		</div>
		</div>
		
		</div>
		</>
		)
}












