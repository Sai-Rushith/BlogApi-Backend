const Post = require("../models/postModel");

exports.createPost = async (req, res) => {

    try {
        // fetch data from request body
        const { title, body } = req.body;
    
        // create a post object
        const post = new Post({
        title,
        body,
        });
    
        // save the new post in the database
        const savedPost = await post.save();
    
        // send response
        res.status(200).json({
        success: true,
        message: "Post created successfully",
        post: savedPost,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: "Error while creating post",
        error: error.message,
        });
    }     
     


}



exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.status(200).json({
            success: true,
            posts,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching posts",
            error: error.message,
        });
    }
};