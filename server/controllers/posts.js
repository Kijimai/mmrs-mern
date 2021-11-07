import PostMessage from "../models/postMessage"

export const getPosts = async (req, res) => {
  res.send("Hello root posts route :)")
  try {
    const postMessages = await PostMessage.find()
    console.log(postMessages)
    res.status(200).json(postMessage)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)

  try {
    await newPost.save()

    // res.status(201).json(newPost)
    res.status(201).json(newPost)
  } catch (err) {
    res.status(409).then(console.log(err))
    // res.status(409).json({ message: err.message })
  }

  res.send("post created")
}
