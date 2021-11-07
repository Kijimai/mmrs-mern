import * as api from "../api/index.js"

// Action creators
// using redux-thunk, dispatch is embedded as an async function
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: "CREATE", payload: data })
  } catch (err) {
    console.log(err.message)
  }
}
