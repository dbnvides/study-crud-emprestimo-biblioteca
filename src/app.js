import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRouter from './routes/books.route.js'
import authorRouter from './routes/author.route.js'
import userRouter from './routes/user.route.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/book', bookRouter)
app.use('/author', authorRouter)
app.use('/user', userRouter)

export default app