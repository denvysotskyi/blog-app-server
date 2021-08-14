const PostsRouter = require('express')
const PostController = require('../controllers/PostController.js')

const router = new PostsRouter()

router.get('/', PostController.getAllPosts)  // endpoints for rendering on server-side
router.get('/: id', PostController.getOnePost)



router.get('/posts', PostController.getAll)
router.get('/posts: id', PostController.getOne)
router.post('/posts', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts: id', PostController.delete)

module.exports = router