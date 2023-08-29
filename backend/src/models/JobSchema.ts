import mongoose from 'mongoose'

const JobSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  offerStartDate: {
    type: Date,
    required: true
  },
  offerEndDate: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  ratePerHour: {
    type: Number,
    required: true
  },
  tools: {
    type: [String],
    required: true
  },
  disciplines: {
    type: [String],
    required: true
  },
  jobDescription: {
    type: String
  },
  jobType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
})

export default mongoose.model('Job', JobSchema)
