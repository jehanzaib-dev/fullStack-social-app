import "./profile.css";
import TopBar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import RightBar from '../../components/rightbar/rightbar.jsx';


export default function ProfilePage(){

	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	return(
		<>
		<TopBar/>
		<div className="profileContainer">
			<Sidebar/>
			<div className="profileRight">
			<div className="profileRightTop">
			<div className="profileTopImagesCntnr">
			<img src={`${publicFolder}post/3.jpeg`} alt="" className="profileCoverImg"/>
			<img src={`${publicFolder}person/7.jpeg`} alt="" className="profilePicImg"/>

			</div>
			<div className="profileTopTextCntnr">
			<h4 className="profileUsername">Jane Doe</h4>
			<span className="profileUserDesc">hello from my side</span>
			</div>

			</div>
			<div className="profileRightBottom">
			<Feed/>
			<RightBar profile/>
			</div>

			</div>
			
		</div>
		</>
		)
}












