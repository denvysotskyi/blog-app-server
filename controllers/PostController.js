const PostService =  require('../services/PostService')

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id)
      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

module.exports = new PostController()