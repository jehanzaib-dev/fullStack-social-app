
import "./rightbar.css";
import Online from '../online/online.jsx';
import {Users} from '../../dummyData.js';



export default function RightBar({profile}){

	const ProfileRightBar=()=>{
		return(
			<>
			<h4 className="rightBarTitle">User Information
			</h4>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">City:
			</span>
			<span className="rightBarDataValue">New York
			</span>
			</div>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">From:
			</span>
			<span className="rightBarDataValue">Madrid
			</span>
			</div>
			<div className="rightBarDataCntnr">
			<span className="rightBarDataKey">Relationship:
			</span>
			<span className="rightBarDataValue">Single
			</span>
			</div>
			<h4 className="userFriendsHeading">User Friends</h4>
			<div className="userFollowingsCntnr">
			<div className="userFollowingItemCntnr">
			<img src="assets/person/1.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>
			<div className="userFollowingItemCntnr">
			<img src="assets/person/2.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>
			<div className="userFollowingItemCntnr">
			<img src="assets/person/3.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>
			<div className="userFollowingItemCntnr">
			<img src="assets/person/4.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>
			<div className="userFollowingItemCntnr">
			<img src="assets/person/5.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>
			<div className="userFollowingItemCntnr">
			<img src="assets/person/6.jpeg" alt="" className="userFollowingImg"/>
			<span className="rightbarFollowingName">Jone Carter
			</span>
			</div>

			</div>


			</>
			)
	}
	const HomeRightBar=()=>{
		return(
		<>
		<div className="birthdayContainer">
				<img src="assets/gift.png" alt="" className="birthdayImg"/>
				<span className="birthdayReminder"><b>Jacky Short </b>and <b>3 others</b> have birthday today.</span>
				
			</div>
			<img src="assets/ad.png" alt="" className="rightbarAd"/>
			<h4 className="onlineTitle">Online Friends</h4>
			<ul className="onlineFriendsList">
			{
				Users.map(u=>(
					<Online key={u.id} user={u}/>))
			}				
				
			</ul>
		</>
		)
	}

return(
	<div className='rightBar'>
		<div className="rightbarWrapper">
			{profile ? <ProfileRightBar/>:<HomeRightBar/>}

		</div>
	

	</div>
	)
}




