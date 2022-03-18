const express = require('express');
const cors = require("cors");
const videoRoutes = require('./routes/videos');
const path = require('path');

require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 8080;


// allow requests from client
app.use(cors({
  origin: process.env.CLIENT_URL
  // origin: 'http://localhost:3000'
}));

// serve static images from express server
app.use(express.static('./public/images'));

// allow posting with req body
app.use(express.json());

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})