import './topbar.css';
import * as MuiIcons from "@mui/icons-material";
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../context/authContext.js';

export default function TopBar(){
	const SearchIcon=MuiIcons.Search;
	const PersonIcon=MuiIcons.Person;
	const ChatIcon=MuiIcons.Chat;
	const NotificationsIcon=MuiIcons.Notifications;

	const {user, dispatch} = useContext(AuthContext);
	const navigate = useNavigate(); // ✅ added

	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;

	// ✅ Logout function
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/login");
	};

	return(
		<div className='topbarContainer'>
		
		<div className="topbarLeft">
			<Link to="/" style={{textDecoration:"none"}}>
				<span className="logo">My Social</span>
			</Link>
		</div>

		<div className="topbarCenter">
			<div className="searchBar">
				<SearchIcon className="searchIcon"/>
				<input placeholder="Search for friend, post or video" className="searchInput"/>
			</div>
		</div>

		<div className="topbarRight">

			<div className="topbarLinks">
				<span className="topbarLink">HomePage</span>
				<span className="topbarLink">TimeLine</span>
			</div>

			<div className="topbarIcons">
				<div className=" topbarIconItem">
					<PersonIcon/>
					<span className="topbarIconBadge">1</span>
				</div>

				<div className=" topbarIconItem">
					<ChatIcon/>
					<span className="topbarIconBadge">2</span>
				</div>

				<div className=" topbarIconItem">
					<NotificationsIcon/>
					<span className="topbarIconBadge">1</span>
				</div>
			</div>

			{/* 👇 Profile Image */}
			<Link to={`/profile/${user.username}`}>
				<img 
					src={user.profilePicture 
						? publicFolder+user.profilePicture 
						: publicFolder+"person/noAvatar.png"} 
					alt="" 
					className="topbarImg"
				/>
			</Link>

			{/* 👇 Logout Button */}
			<button onClick={handleLogout} className="logoutBtn">
				Logout
			</button>

		</div>
		</div>
	)
}