const { Schema, model } = require('mongoose')

const Post = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  imageUrl: {type: String, required: true},
}, {timestamps: true})

module.exports = model('Post', Post)