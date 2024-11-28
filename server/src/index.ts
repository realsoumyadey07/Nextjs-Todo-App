import express, { Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDB from "./utils/db"
import { todoRouter } from "./router/todo.router"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
     origin: process.env.ORIGIN,
     methods: 'GET,POST,PUT,DELETE',
     credentials: true
}))
ConnectDB()

app.use("/api/v1", todoRouter)

app.get("/test", (req: Request, res: Response)=> {
     res.send("Ok tested!")
})


app.listen(port, ()=> {
     console.log(`Server is running on port: ${port}`)
})