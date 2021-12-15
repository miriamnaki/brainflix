const express = require('express');
const cors = require("cors");
const videoRoutes = require('./routes/videos');

const app = express();

app.use(cors());

app.use(express.static('./public/images'));

app.use(express.json());

app.use('/videos', videoRoutes);

app.listen(8080, () => {
  console.log('server listening');
})