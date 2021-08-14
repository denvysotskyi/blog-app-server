const PostsRouter = require('express')
const PostController = require('../controllers/PostController.js')
const Post = require('../models/Post.js')

const router = new PostsRouter()


router.get('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
  } catch (e) {
    console.log(e)
  }
})



router.get('/posts', PostController.getAll)
router.get('/posts: id', PostController.getOne)
router.post('/posts', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts: id', PostController.delete)

module.exports = router