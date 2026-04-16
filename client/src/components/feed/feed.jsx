import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../context/authContext.js';



export default function Feed({username}){

	const [posts, setPosts]=useState([]);
	const user=useContext(AuthContext);

	useEffect(()=>{
		const fetchPosts=async()=>{
		const response=username? await axios.get("/posts/profile/"+username) :await axios.get("/posts/timeline/"+user.user._id);
		setPosts(response.data); 	
		}
		fetchPosts();
	},[username, user._id]);

	return(
		<div className='feedContainer'>
		<div className="feedWrapper">
			<Share/>
			{
				posts.map((p)=>(
					<Post key={p._id} post={p}/>
					))
			}
		</div>
		</div>
		)
}