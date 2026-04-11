
import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 
import {Posts} from '../../dummyData.js';


export default function Feed(){

	return(
		<div className='feedContainer'>
		<div className="feedWrapper">
			<Share/>
			{
				Posts.map((p)=>(
					<Post key={p.key} post={p}/>
					))
			}
		</div>
		</div>
		)
}