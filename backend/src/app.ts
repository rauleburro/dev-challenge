import * as express from 'express'
import * as cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { typeDefs } from './gql/typeDefs'
import { resolvers } from './gql/resolvers/Users'
import bodyParser = require('body-parser')
import { expressMiddleware } from '@apollo/server/express4'
import * as jwt from 'jsonwebtoken'
import config from './config/confg'
import User from './models/UserSchema'
import { GraphQLError } from 'graphql'

const getUser = (token: string): any | null => {
  try {
    if (token != null) {
      const verified = jwt.verify(token, config.jwt.secret)
      const user = User.findOne({ _id: verified })
      return user
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

const initailizeApp = async (): Promise<express.Express> => {
  const app: express.Express = express()

  app.use(express.json())

  app.use(cors())

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  console.log('Apollo Server started')
  app.use(
    '/',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        console.log(req.body.operationName)

        const allowedOperations = [
          'User',
          'CreateJob',
          'DeleteJob',
          'UpdateJob',
          'DeleteUser',
          'UpdateUser',
          'MyPosts',
          'ApplyToJob'
        ]

        const token = req.headers.authorization ?? ''

        const user = await getUser(token)

        if (!allowedOperations.includes(req.body.operationName)) {
          return {
            user
          }
        }

        if (user == null) {
          throw new GraphQLError('User is not authenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 }
            }
          })
        }

        return {
          user
        }
      }
    })
  )

  return app
}

export default initailizeApp
