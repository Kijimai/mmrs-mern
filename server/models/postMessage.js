import mongoose from "mongoose"
import {Schema} from mongoose

const postSchema = Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {type: Date,
    default: new Date()
  }
})

const PostMessage = mongoose.model('Post', postSchema)

export default PostMessage