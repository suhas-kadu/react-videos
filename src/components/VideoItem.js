import React from "react";
import './VideoItem.css';

const VideoItem = (props) => {

    const onVideoClicked = () => {
        props.onVideoSelected(props.video);
    }

    return (
        <div style={{overflow : "hidden"}} className="video-item item" onClick={onVideoClicked}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                <p className="description segment">{props.video.snippet.channelTitle}</p>
                {/* <div className="description">{props.video.snippet.description}</div> */}
            </div>
        </div>
    );
}

export default VideoItem;