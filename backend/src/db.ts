import mongoose from 'mongoose'
import config from './config/confg'

const connectDatabase = async (): Promise<mongoose.Connection> => {
  await mongoose.connect(config.mongo.uri)
  console.log('Connected to MongoDB')
  const db: mongoose.Connection = mongoose.connection
  return db
}

export { connectDatabase }
