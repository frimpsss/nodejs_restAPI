const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

//get all post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch (err) {
        res.send({"message": err})
    }

})
//find post by id
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
   try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
   }
   catch (err) {
        res.send({"message": err})
   }
})


//submit post
router.post('/', (req, res) => {
    // console.log(req.body)
    const post = new Post({
        title: req.body.title, 
        description: req.body.description
    })
    post.save()
    
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.send({"message": err})
    })
})

//delete post
router.delete('/:id', async (req, res) => {
    try{
        const deletedPost = await Post.remove({_id: req.params.id}) 
        res.json(deletedPost)
}
    catch (err){ res.send({"message": err})}
})

module.exports = router