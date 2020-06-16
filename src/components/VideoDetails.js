import React from 'react';
import { Paper, Typography } from '@material-ui/core';

//Video is a prop pased from App.js file
//Fragment is like a div
//iframe is used to display the video for us
//video.id.videoId --> gives an id of the searched video and it is appended to the end of the src
//https://www.youtube.com/embed/${video.id.videoId}

const VideoDetail = ({ video }) => {

    if(!video) return <div>Loading...</div>

    //if u put this id obtained in log at the place of ${} in videoSrc ull get a video
    console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '5px' }}>
                <Typography variant="h5" >{video.snippet.title} - {video.snippet.chanelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle3">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;