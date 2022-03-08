const express = require('express');
const cors = require("cors");
const videoRoutes = require('./server/routes/videos');

// make .env files availabe
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 5050;

// allow requests from client
app.use(cors({
  origin: process.env.CLIENT_URL
}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
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