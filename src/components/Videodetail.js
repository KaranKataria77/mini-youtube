import React from 'react';

const Videodetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videosrc= `https://www.youtube.com/embed/${video.id.videoId}`
        return(
            <div>
                <div className="ui embed">
                    <iframe src={videosrc} title="video player"/>
                </div>
                 <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4> 
                    <p>{video.snippet.description}</p>
                 </div>
            </div>
        ) 


    
    
}

export default Videodetail;