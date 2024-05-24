import Express from "express"
import userRoutes from './routes/users.js'
import authRoutes from './routes/auths.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'


const app = Express()

app.use("/app/auth",authRoutes)
app.use("/app/users",userRoutes)
app.use("/app/posts",postRoutes)
app.use("/app/comments",commentRoutes)
app.use("/app/likes",likeRoutes)

app.listen(8000,()=>{
    console.log("running aplication at PORT 8000")
})