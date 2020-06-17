//export default components and single export components do not need curly braces
import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetails, VideoList, Icon } from './components'

//Class based components are used at places where we apply logic more
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    //This means everything inside this functions runs immediately after the component loads
    componentDidMount(){
        this.handleSubmit('PUBG MOBILE__FUNNY GAMEPLAY :)');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        //async means the code doesn't get executed until the data is fetched completely
        //Here youtube is imported from api folder and it has some arguments
        const response = await youtube.get('search', {
            params: {
                //part --> According to API Doc it returns videos
                part: 'snippet',
                maxResults: 4,
                key: '[API_KEY]',
                q: searchTerm,
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    render(){
        //This means this.state.selectedVideo --> globally
        const { selectedVideo, videos } = this.state;
        return(
            <div style={{ backgroundColor:'#2F363F' }}>
            <Icon/>
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} style={{ padding: '80px' }}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default App;
