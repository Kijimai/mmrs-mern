import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import postRoutes from "./routes/posts.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App now listening on port ${PORT}`)
    })
  })
  .catch((err) => console.log(err.message))

app.use("/posts", postRoutes)
