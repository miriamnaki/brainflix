const express = require('express');
const videoRoutes = require('./routes/videos');
const app = express();

app.use(express.json());

app.use('/videos', videoRoutes);

app.listen(8080, () => {
  console.log('server listening');
})