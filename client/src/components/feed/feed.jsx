import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 
import {useState, useEffect} from 'react';
import axios from 'axios';



export default function Feed(){

	const [posts, setPosts]=useState([]);

	useEffect(()=>{
		const fetchPosts=async()=>{
		const response=await axios.get("/posts/timeline/69d747f9791e0b0a933a0da1");
		setPosts(response.data); 	
		}
		fetchPosts();
	},[]);

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