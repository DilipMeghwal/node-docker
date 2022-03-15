const Post = require("../models/blogModel")

const getAllPosts = (req, res, next) => {
    try {
        const post = await Post.find()
        res.status(200).json({
            status: "success",
            results: postMessage.length,
            data: {
                posts
            }
        })

    } catch (e) {
        res.status(400).json({
            status: "fail",
        })
    }
}