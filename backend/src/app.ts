import * as express from 'express'
import * as bcrypt from 'bcrypt'
import User from './models/UserSchema'
import config from './config/confg'
import * as jwt from 'jsonwebtoken'

const app: express.Express = express()

app.use(express.json())

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user == null) {
      return res.status(404).json({ message: 'User not found' })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user._id }, config.jwt.secret, { expiresIn: '1h' })

    return res.status(200).json({ token })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

export default app
