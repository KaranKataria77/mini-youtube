import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({videos, onVideoselect}) => {
    const renderList = videos.map((video) => {
        return <Videoitem key={video.id.videoId} onVideoselect={onVideoselect} video={video} />
    });
    return(
        <div className="ui relaxed divided list">{renderList}</div>
    ) 
}

export default Videolist;