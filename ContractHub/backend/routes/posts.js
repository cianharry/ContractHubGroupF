const express = require('express');
const Post = require('../models/post');
const router = express.Router();
const authCheck = require('../middle/auth-check');

// MongoDB password: 8zWDHq8iWGDyfNMz
// storing new contract posts in Mongo
router.post(
  '',
  authCheck,
  (req, res, next) => {
  // instantiation of the Post model
  // imported from the constructor function exported from post.js
  const post = new Post({
    title: req.body.title,
    salary: req.body.salary,
    location: req.body.location,
    client: req.body.client,
    duration: req.body.duration,
    desc: req.body.desc
  });

router.put(
  '/:id',
  authCheck,
  (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    salary: req.body.salary,
    location: req.body.salary,
    client: req.body.client,
    duration: req.body.duration,
    desc: req.body.desc
  });
  Post.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Contract Updated Succesfully"});
  });
});

  // saves the mongoose model
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'post added successfully',
      postId: createdPost._id
    });
  });
});

router.get(
  '',
  authCheck,
  (req, res, next) => {
  Post.find()
  .then(documents => {
    res.status(200).json({
      posts: documents
    });
  });
});

router.delete(
  '/:id',
  authCheck,
  (req, res, next) => {
  Post.deleteOne({ _id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Contract deleted!' });
  });
});

module.exports = router;
