import app from './app'
import config from './config/confg'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { typeDefs } from './gql/typeDefs'
import { resolvers } from './gql/resolvers/Users'
import { connectDatabase } from './db'

const mount = async (): Promise<void> => {
  try {
    const db = await connectDatabase()

    const server = new ApolloServer({
      typeDefs,
      resolvers
    })
    await server.start()
    console.log('Apollo Server started')
    app.use('/', expressMiddleware(server, {
      context: async () => {
        return {
          dataSources: {
            db
          }
        }
      }

    }))
    console.log('Express middleware applied')
    app.listen(config.port)
    console.log(`Server listening on port ${config.port}`)
  } catch (err) {
    console.log(err)
  }
}

void mount()
