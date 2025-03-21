import cors from 'cors'
import express, { Request, Response } from 'express'
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes

// playground

// Initial route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ status: 200, message: 'Server is running' })
})

export default app
