import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js"


const PORT = process.env.PORT || 5000
const app = express()

dotenv.config() //Load env variables

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//   //  root route localhost:5000
//   res.send("Sup mfs")
// })


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server listening on port ${PORT}`)
})