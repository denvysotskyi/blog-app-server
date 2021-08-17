const PostRouter = require('express')
const PostController = require('../controllers/PostController.js')

const router = new PostRouter()

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.post('/posts', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

module.exports = router