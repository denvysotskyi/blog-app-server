const PostsRouter = require('express')
const PostController = require('../controllers/PostController.js')

const router = new PostsRouter()

router.post('/posts', PostController.create)
router.delete('/posts: id', PostController.delete)

module.exports = router