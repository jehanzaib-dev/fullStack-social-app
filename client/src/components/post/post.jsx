import './post.css';
import * as MuiIcons from "@mui/icons-material";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {format} from 'timeago.js'
import { useContext } from 'react';
import {AuthContext} from '../../context/authContext.js';


export default function Post({post}){
	const MoreVertIcon=MuiIcons.MoreVert;
	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	const [likeCount, setLikeCount]=useState(post.likes?.length || 0);
	const [isLiked, setIsLiked]=useState(false);
	const [user, setUser]=useState({});
	const {user:currentUser}=useContext(AuthContext);

	


	useEffect(() => {
  setIsLiked(post.likes?.includes(currentUser._id));
}, [currentUser._id, post.likes]);

	const handleLike = async () => {
  	try {
		await axios.put(`/posts/react/${post._id}`, {
      userId: currentUser._id,
    });

    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);

  } catch (err) {
    console.log(err);
  }
};
	useEffect(() => {
  const fetchUser = async () => {
    if (!post.userId) return; // ✅ prevent crash

    const res = await axios.get(`/users?userId=${post.userId}`);
    setUser(res.data.user);
  };

  fetchUser();
}, [post.userId]);

return(
	<div className="postContainer">
		<div className="postWrapper">
			<div className="postWrapperTop">
				<div className="postWrapperTopLeft">
				<Link to={`profile/${user.username}`}>
				<img src={user.profilePicture ? publicFolder+user.profilePicture:publicFolder+"person/noAvatar.png"} alt="" className="postWrapperTopLeftImg"/>
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
			{post.img && (
  			<img src={`http://localhost:8800/images/${post.img}`} alt="" className="postWrapperCenterImg"
  			/>
)}
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