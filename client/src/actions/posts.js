import * as api from "../api"

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
