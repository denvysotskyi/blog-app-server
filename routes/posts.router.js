const PostsRouter = require('express')
const PostController = require('../controllers/PostController.js')
const Post = require('../models/Post.js')

const router = new PostsRouter()


router.post('/remove', async (req, res) => {
  try {
    const { postId } = req.body
    await Post.findByIdAndDelete(postId)
    res.json({message: 'Post deleted'})
  } catch (e) {
    res.status(500).json(e.message)
  }
})



router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.post('/posts', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts: id', PostController.delete)

module.exports = router