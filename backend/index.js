import express from "express"
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express()


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });


app.use(bodyParser.json());
  
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );



  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  


const upload = multer({ storage: storage })
  
  
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)

app.listen(8000,()=>{
    console.log("running aplication at PORT 8000")
})