const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')
const postsRoutes = require('./routes/posts')

const app = express();

// connection to MongoDB Atlas cloud server
mongoose.connect('mongodb+srv://cian:Scaldy_69@cluster0-kbtyk.mongodb.net/test')
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(() => {
    console.log('Connection Failed!')
  });

// used to parse the body of the data response for the post method
app.use(bodyParser.json());

app.use((req, res, next) => {
  // this means no matter what domain an app send the request from it allows it to access the resources
  res.setHeader('Access-Control-Allow-Origin', '*');
  // restricts to demains with a certain set of headers that are not the default headers
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
  // allows the http verbs that will be used
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
