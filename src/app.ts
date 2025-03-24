import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

import { UserRoutes } from './app/modules/users/user.route'
import ApiError from './errors/ApiErros'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// Testing API
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Testing')
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
