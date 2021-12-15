const {Router, json} = require('express');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const videoRouter = Router();


// read data from json file
const readData = () => {
  const videoData = fs.readFileSync('./data/videos.json');
  return JSON.parse(videoData);
}
// Fetch a list of videos
videoRouter.get('/', (req, res) => {
  const videoData = readData();

  let newVideoData = [...videoData];

  newVideoData = newVideoData.map(listVideo => {
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


// Post data to the video API
// function to write data to the file
const writeData = (videoData) => {
  fs.writeFileSync('./data/videos.json', JSON.stringify(videoData, null, 2));
  
}

videoRouter.post('/', (req, res) => {
  const videoData = readData();
  
  // validating Data
  if(!req.body.title || !req.body.description ) {
      return res.status(400).send('The video must include a title and description');
  }

  const postedVideo = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    channel: 'video channel',
    image: 'video image',
    views: 'video views',
    likes: 'video likes',
    duration: 'video duration',
    video: 'video player',
    timestamp: 'video time',
    comments: []
  }

  videoData.push(postedVideo);
  writeData(videoData);

  res.status(201).json(postedVideo);


});

module.exports = videoRouter