import * as Joi from 'joi'
import 'dotenv/config'

const envVarsSchema = Joi.object({
  PORT: Joi.number()
    .default(4040),
  MONGODB_URI: Joi.string().required()
    .description('Mongo DB host url'),
  JWT_SECRET: Joi.string().required()
}).unknown()

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env)

if (error != null) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  port: envVars.PORT,
  mongo: {
    uri: envVars.MONGODB_URI
  },
  jwt: {
    secret: envVars.JWT_SECRET
  }
}

export default config
