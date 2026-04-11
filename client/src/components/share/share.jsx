import './share.css';
import * as MuiIcons from "@mui/icons-material";


export default function Share(){

	const MediaIcon=MuiIcons.PermMedia;
	const LabelIcon=MuiIcons.Label;
	const LocationPinIcon=MuiIcons.LocationPin;
	const EmojiEmotionsIcon=MuiIcons.EmojiEmotions;

	return(
<div className="shareContainer">
	<div className="shareWrapper">
		<div className="shareWrapperTop">
			<img src="/assets/person/1.jpeg" alt="" className="shareWrapperTopImage"/>
			<input placeholder="What's in your mind?" className="shareWrapperTopInput"/>
		</div>
		<hr className="shareWrapperHr"/>
		<div className="shareWrapperBottom">
		<div className="shareOptions">
		<div className="shareOption">
		<MediaIcon htmlColor="tomato" className="shareOptionIcon"/>
		<span className="shareOptionText">
			Photo or Video			
		</span>
		</div>
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
		<button className="shareButton">Share</button>
	</div>	
	</div>
</div>
)
}










