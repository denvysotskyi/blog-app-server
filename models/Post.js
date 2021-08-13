const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  text: {type: String, required: true},
  photoUrl: {type: String, required: true},
}, {timestamps: true})

module.exports = mongoose.model('Post', Post)