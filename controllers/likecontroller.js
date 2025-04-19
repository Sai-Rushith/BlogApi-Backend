const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likepost = async (req, res) => {
    try {
        const { post, user } = req.body;

        // Optional: Check if post exists
        const existingPost = await Post.findById(post);
        if (!existingPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        // Create a new like
        const like = new Like({
            post,
            user,
        });

        // Save the like to the database
        const savedLike = await like.save();

        // Push like into post
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        )
        .populate("likes").exec();

        // Send response
        res.status(200).json({
            success: true,
            message: 'Post liked successfully',
            post: updatedPost,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error liking the post',
            error: error.message,
        });
    }
};



exports.unlikepost = async (req, res) => {
    try {
        const { post, like} = req.body;

        // Optional: Check if post exists
        const existingPost = await Post.findById(post);
        if (!existingPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        // Find the like and remove it
        const removedLike = await Like.findOneAndDelete({post: post,_id:like} );

        if (!removedLike) {
            return res.status(404).json({
                success: false,
                message: 'Like not found',
            });
        }

        // Remove like from post
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: removedLike._id } },
            { new: true }
        ).populate("likes").exec();
     
        // Send response
        res.status(200).json({
            success: true,
            message: 'Post unliked successfully',
            post: updatedPost,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error unliking the post',
            error: error.message,
        });
    }
};
// Dummy route for testing




exports.dummyLink = (req, res) => {
    res.send("Like controller is working fine");
};
