import './post.css';
import * as MuiIcons from "@mui/icons-material";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {format} from 'timeago.js'


export default function Post({post}){
	const MoreVertIcon=MuiIcons.MoreVert;
	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	const [likeCount, setLikeCount]=useState(post.likes.length);
	const [isLiked, setIsLiked]=useState(false);
	const [user, setUser]=useState({});

	



	const handleLike=()=>{
		setLikeCount(isLiked?likeCount-1:likeCount+1);
		setIsLiked(!isLiked);
	}
	useEffect(()=>{
		const fetchUser=async()=>{
		const response=await axios.get(`/users/get/${post.userId}`);
		
		setUser(response.data.user);
		}
		fetchUser();
	},[post.userId]);

return(
	<div className="postContainer">
		<div className="postWrapper">
			<div className="postWrapperTop">
				<div className="postWrapperTopLeft">
				<Link to={`profile/${user.username}`}>
				<img src={user.profilePicture || publicFolder+"person/noAvatar.png"} alt="" className="postWrapperTopLeftImg"/>
			</Link>
				<span className="postWrapperTopLeftText">
					{user.username}
				</span>
				<span className="postWrapperTopLeftDate">{format(post.createdAt)}</span>
				</div>
				<div className="postWrapperTopRight">
					<MoreVertIcon className="postWrapperTopRightIcon"/>
				</div>
			</div>
			<div className="postWrapperCenter">
			<span className="postWrapperCenterText">
				{post?.desc}
			</span>
			<img src={publicFolder+post.img} alt="" className="postWrapperCenterImg"/>
			</div>
			<div className="postWrapperBottom">
				<div className="postWrapperBottomLeft">
					<img src={`${publicFolder}like.png`} alt="" className="likeIcon" onClick={handleLike}/>
					<img src={`${publicFolder}heart.png`} alt="" className="likeIcon" onClick={handleLike}/>
					<span className="postLikeCounter">
						{likeCount} people liked it
					</span>
				</div>
				<div className="postWrapperBottomRight">
					<span className="postCommentText">{post.comment} comments</span>
				</div>
			</div>
		</div>


	</div>
	)
}