const { Schema, model } = require('mongoose')

const Post = new Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  text: {type: String, required: true},
  photoUrl: {type: String, required: true},
}, {timestamps: true})

module.exports = model('Post', Post)