const Post = require('../models/Post')
const User = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

class PostController {
    async createPost(req,res,next){
        const {title, description,url, status} = req.body;

        if(!title){
            return res.status(400).json({success: false, message: 'Missing Tittle'})
        }

        try{
            const newPost = req.body;
            newPost.url = url.startsWith('https://') ? url : `https://${url}`
            newPost.status = status || "TO LEARN"
            newPost.user = '62cf9d95df158daa3fe5f816'

            await newPost.save()
            
            res.json({success: true, message: "Welcome to LEARN HEAR"})
        }catch(e){
            console.log(e)
            return res.status(400).json({success: false, message: "ERROR"})
        }
    }

   seePost = async (req,res,next) => {
        try{
            const posts = await Post.find({}).lean()
            const users = await User.find({}).lean()
            const postHaveUser = await posts.map( post => {
                let username = null;
                users.forEach( user => {
                    if (user._id.equals(post.user)){
                        username = user.username
                    }
                })
                return {
                    ...post,
                    username
                }
            })
            res.json({success: true, postHaveUser})
        }catch(error){
            console.log(error)
            return res.status(400).json({success: false, message: "ERROR"})
        }
    }

    updatePost = async (req,res) =>{
        const {title,description,url,status} = req.body

        let updatePost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || "TO LEARN",
        }

        const postUpdateCondition = {_id: req.params.id, user: req.userId}
        
        updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {new: true})

        if(!updatePost){
            return res.status(500).json({success: false, message: "Post not found or user not author"})
        }
    }
}

module.exports = new PostController()