import React from 'react';
import './Videoitem.css'

const Videoitem = ({video, onVideoselect}) => {
    return (
        <div onClick={() => onVideoselect(video)} className="video-item item">
            <img className="ui image" 
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.description}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    )
}

export default Videoitem;