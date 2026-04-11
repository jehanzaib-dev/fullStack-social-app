import './home.css';
import TopBar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import RightBar from '../../components/rightbar/rightbar.jsx';

export default function HomePage(){

	return(
		<>
		<TopBar/>
		<div className="homeContainer">
			<Sidebar/>
			<Feed/>
			<RightBar/>
		</div>
		</>
		)
}