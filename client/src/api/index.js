import axios from "axios"

const url = "http://localhost:5000/posts"

export const fetchPosts = () => {
  return axios.get(url)
}

export const createPost = (newPost) => {
  return axios.post(url, newPost)
}
