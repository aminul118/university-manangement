import mongoose from 'mongoose'
import app from './app'
import { config } from './config'

const serverStarts = async () => {
  try {
    await mongoose.connect(config.mongoURI)
    console.log(`🛢 Database connected`)
    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`)
    })
  } catch (error) {
    console.log('Server is Crashed', error)
  }
}

serverStarts()
