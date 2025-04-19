const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    // fetch data from request body
    const { post, user, body } = req.body;

    // create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment in the database
    const savedComment = await comment.save();

    // find the post by ID and push the new comment's ID into its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    // send response
    res.status(200).json({
      success: true,
      message: "Comment added and post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating comment",
      error: error.message,
    });
  }
};
