import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 
import {useState, useEffect} from 'react';
import axios from 'axios';



export default function Feed({username}){

	const [posts, setPosts]=useState([]);

	useEffect(()=>{
		const fetchPosts=async()=>{
		const response=username? await axios.get("/posts/profile/"+username) :await axios.get("/posts/timeline/69d747f9791e0b0a933a0da1");
		setPosts(response.data); 	
		}
		fetchPosts();
	},[username]);

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