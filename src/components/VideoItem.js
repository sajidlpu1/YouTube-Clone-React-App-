import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

//This is just a mini component used in VideoList.js file
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12} style={{margin:'5px', padding: '10px' }}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video) }>
        <img style={{ marginRight: '20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle2"><b>{video.snippet.title}</b></Typography>
        </Paper>
        </Grid>
    )
}

export default VideoItem;