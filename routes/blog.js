const express = require('express');
const router = express.Router();    

const {dummyLink} = require('../controllers/likecontroller');
const {createComment} = require('../controllers/commentcontroller');

const{createPost} = require('../controllers/Postcontroller');
const {getAllPosts} = require('../controllers/Postcontroller');
const {likepost} = require('../controllers/likecontroller');
const {unlikepost} = require('../controllers/likecontroller');

router.post("/comments/create", createComment);
// Dummy route for testing purposes
router.get("/dummyroute", dummyLink);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/posts/like", likepost);
router.post("/posts/unlike", unlikepost);




module.exports = router;