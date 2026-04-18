import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 


export default function Feed({posts, setPosts}){


	return(
		<div className='feedContainer'>
		<div className="feedWrapper">
			<Share setPosts={setPosts}/>
			{
				posts?.map((p)=>(
					<Post key={p._id} post={p}/>
					))
			}
		</div>
		</div>
		)
}