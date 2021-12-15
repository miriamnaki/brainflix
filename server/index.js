const express = require('express');
const fs = require('fs');
const app = express();

// read data from json file
const readData = () => {
  const videoData = fs.readFileSync('./data/videos.json');
  return JSON.parse(videoData);
}
// Fetch a list of videos
app.get('/videos', (req, res) => {
  const videoData = readData();

  let newVideoData = [...videoData];

  newVideoData = newVideoData.map(listVideo => {
    const { description, views, likes, video, timestamp,comments, duration, ...restProperties } = listVideo;
    return restProperties;
  });
  res.status(200).json(newVideoData);
});

// Fetch a detailed video with a specified id
app.get('/videos/:videoId', (req, res) => {
  const videoData = readData();

  const videoDetails = videoData.find(video => video.id === req.params.videoId);

  if(!videoDetails) {
    return res.status(404).json().send('The video you requested does not exist');
  }
  res.status(200).json(videoDetails);

})

app.listen(8080, () => {
  console.log('server listening');
})