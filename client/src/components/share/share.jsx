import { useContext, useRef, useState } from 'react';
import './share.css';
import * as MuiIcons from "@mui/icons-material";
import {AuthContext} from '../../context/authContext.js';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Share({setPosts}){

	const MediaIcon=MuiIcons.PermMedia;
	const LabelIcon=MuiIcons.Label;
	const LocationPinIcon=MuiIcons.LocationPin;
	const EmojiEmotionsIcon=MuiIcons.EmojiEmotions;
	const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
	const {user}=useContext(AuthContext);
	const desc=useRef();
	const [file, setFile]=useState(null);


	const handleSubmit = async (e) => {
  e.preventDefault();


  const newPost = {
    userId: user._id || user.user?._id,
    desc: desc.current.value,
  };

  try {
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("file", file);
      data.append("name", fileName);

      const uploadRes = await axios.post("/upload", data);
      newPost.img = uploadRes.data.filename;
    }

    const res = await axios.post("/posts", newPost);

    setPosts((prev) => [res.data, ...prev]);

    desc.current.value = "";
    setFile(null);

  } catch (err) {
    console.log(err);
  }
};
	

	return(
<div className="shareContainer">
	<div className="shareWrapper">
		<div className="shareWrapperTop">
			<img src={user.profilePicture ? publicFolder+user.profilePicture : publicFolder+"person/noAvatar.png"} alt="" className="shareWrapperTopImage"/>
			<input placeholder={"What's in your mind " +user.username+ "?"} className="shareWrapperTopInput" ref={desc}/>
		</div>
		<hr className="shareWrapperHr"/>
		{
			file && 
			<div className="previewImageCntnr">
			<img className="previewImage" src={URL.createObjectURL(file)} alt=""/>
				<CancelIcon className="cancelButton" onClick={()=>setFile(null)}/>
				</div>
			}
		<form className="shareWrapperBottom" onSubmit={handleSubmit}>
		<div className="shareOptions">
		<label htmlFor='fileInput' className="shareOption">
		<MediaIcon htmlColor="tomato" className="shareOptionIcon"/>
		<span className="shareOptionText">
			Photo or Video			
		</span>
		<input style={{display:"none"}} type='file' id="fileInput" accept='.png, .jpeg, .jpg' onChange={(e)=>setFile(e.target.files[0])}/>
		</label>
		<div className="shareOption">
		<LabelIcon htmlColor="blue" className="shareOptionIcon"/>
		<span className="shareOptionText">
			Tag			
		</span>
		</div>
		<div className="shareOption">
		<LocationPinIcon htmlColor="green" className="shareOptionIcon"/>
		<span className="shareOptionText">
			Location			
		</span>
		</div>
		<div className="shareOption">
		<EmojiEmotionsIcon htmlColor="goldenrod" className="shareOptionIcon"/>
		<span className="shareOptionText">
			Feelings			
		</span>
		</div>
		</div>
		<button type='submit' className="shareButton">Share</button>
	</form>

	</div>
</div>
)
}










