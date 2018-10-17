import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imgURL = video.snippet.thumbnails.default.url;
	const heading = video.snippet.title;
	
	return(
		<li className = "list-group-item " onClick={() => onVideoSelect(video)}>
		<div className="video-list media">
		<div className="media-left">
		<img className="media-object" src={imgURL} alt={heading} />
		</div>
		<div className="media-body">
		<div className="media-heading">
		{heading}
		</div>
		</div>
		</div>
		</li>




		);
};

export default VideoListItem;