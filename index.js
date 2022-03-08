const express = require('express');
const cors = require("cors");
const videoRoutes = require('./routes/videos');


// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://mybrainflix.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

// make .env files availabe
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 5050;

// allow requests from client
app.use(cors({
  origin: process.env.CLIENT_URL
}));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// serve static images from express server
app.use(express.static('./public/images'));

// allow posting with req body
app.use(express.json());

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})