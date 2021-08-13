const Post =  require('../models/Post.js')

class PostService {
  async create(post) {
    const createdPost = await Post.create(post)
    return createdPost
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id не указан')
    }
    const post = await Post.findByIdAndDelete(id)
    return post
  }
}

module.exports = new PostService()