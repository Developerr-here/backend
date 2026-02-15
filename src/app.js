import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app=express()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit: "16kb"}))
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.static("public"))
app.use(cookieParser())


// import routes

// In your user.routes.js, you used export default router;.
// When importing a default export, you can name it anything (like userRouter), but if you accidentally used curly braces like import { userRouter }, it will fail silently or cause issues.
import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users",userRouter)

export default app

