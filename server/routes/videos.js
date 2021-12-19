const {Router, json} = require('express');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const videoRouter = Router();


// read data from json file
const readData = () => {
  const videoData = fs.readFileSync('./data/videos.json');
  return JSON.parse(videoData);
}

// Fetch a list of videos endpoint
videoRouter.get('/', (_req, res) => {
  const videoData = readData();

  let newVideoData = [...videoData];

  newVideoData = newVideoData.map(listVideo => {

    //destructuring out video properties
    const { description, views, likes, video, timestamp,comments, duration, ...restProperties } = listVideo;
    return restProperties;
  });
  res.status(200).json(newVideoData);
});

// Fetch a detailed video with a specified id
videoRouter.get('/:videoId', (req, res) => {
  const videoData = readData();

  const videoDetails = videoData.find(video => video.id === req.params.videoId);

  if(!videoDetails) {
    return res.status(404).json().send('The video you requested does not exist');
  }
  res.status(200).json(videoDetails);

})


// function to write data to the file
const writeData = (videoData) => {
  fs.writeFileSync('./data/videos.json', JSON.stringify(videoData, null, 2));  
}

// function to convert current time to timestamp
function dateToTimestamp(){
  let timestamp = Date.now();
  return timestamp;
}

// Post data to the video API
videoRouter.post('/', (req, res) => {
  const videoData = readData();
  
  // validating posted video data
  if(!req.body.title || !req.body.description ) {
      return res.status(400).send('The video must include a title and description');
  }
  
  // postig a video
  const postedVideo = {
    title: req.body.title,
    description: req.body.description,
    channel: 'video channel',
    image: 'http://localhost:8080/Upload-video-preview.jpg',
    views: 0,
    likes: 0,
    duration: 'video duration',
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: dateToTimestamp(),
    comments: [],
    id: uuid(),
    
  }

  videoData.push(postedVideo);
  writeData(videoData);

  res.status(200).json(postedVideo);

});

// End point to post comments to a video
videoRouter.post('/:videoId/comments', (req, res) => {
  let videoData = readData();
  const foundVideo = videoData.find(video => video.id === req.params.videoId);

  if(!foundVideo) {
    return res.status(404).send('This video cannot be found');
  }

  // validating posted comment data
  if(!req.body.comment) {
    return res.status(400).send('The comment must include a body');
  }
  
  const updateComments = {
    name: 'Anonymous',
    comment: req.body.comment,
    likes: 0,
    timestamp: dateToTimestamp()
  }
  
  foundVideo.comments.push(updateComments);
  writeData(videoData);
  res.status(200).json(foundVideo);
})


module.exports = videoRouter