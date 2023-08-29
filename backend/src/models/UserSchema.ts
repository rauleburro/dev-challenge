import mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'

const UserSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  role: {
    type: String,
    default: 'talent',
    enum: ['Talent', 'Recruiter']
  }
})

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  next()
})

export default mongoose.model('User', UserSchema)
