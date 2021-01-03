import React from 'react';
import Searchbar from './components/Searchbar';
import Youtube from './Apis/Youtube.js';
import Videolist from './components/Videolist';
import Videodetail from './components/Videodetail';

const KEY = "AIzaSyAI_UZ3IoQaj8lg5hi1CZH3rfcn3-ayb_c"

class App extends React.Component {

    state= { videos: [], selectedVideo: null};


    onTermSubmit = async (term) => {
       const response =  await Youtube.get("/search",{ 
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        })
        this.setState({videos:response.data.items , selectedVideo: response.data.items[0]});
    };

    onVideoselect = (video) => {
        this.setState({selectedVideo: video})
    }
    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                    <Videodetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                    <Videolist onVideoselect={this.onVideoselect} videos={this.state.videos} />
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;