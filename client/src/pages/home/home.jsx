import './home.css';
import TopBar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import RightBar from '../../components/rightbar/rightbar.jsx';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext.js';



export default function HomePage(){
	const [posts, setPosts]=useState([]);
	const {user:currentUser}=useContext(AuthContext);

	useEffect(() => {
  const fetchPosts = async () => {
    if (!currentUser?._id) return; // 🔥 IMPORTANT

    try {
      const res = await axios.get(
        "/posts/timeline/" + currentUser._id
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchPosts();
}, [currentUser]);



	return(
		<>
		<TopBar/>
		<div className="homeContainer">
			<Sidebar/>
			<Feed posts={posts} setPosts={setPosts}/>
			<RightBar/>
		</div>
		</>
		)
}