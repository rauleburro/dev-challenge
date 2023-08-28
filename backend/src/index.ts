import initailizeApp from './app'
import config from './config/confg'
import { connectDatabase } from './db'

const mount = async (): Promise<void> => {
  try {
    await connectDatabase()

    const app = await initailizeApp()

    app.listen(config.port)

    console.log(`Server listening on port ${config.port}`)
  } catch (err) {
    console.log(err)
  }
}

void mount()
