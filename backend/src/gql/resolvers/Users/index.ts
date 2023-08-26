import Job from '../../../models/JobSchema'
import User from '../../../models/UserSchema'

export const resolvers = {
  Query: {
    users: async (_: any, __: any, { dataSources }: any) => {
      return await User.find()
    },
    user: async (_: any, { id }: any, { dataSources }: any) => {
      return await User.findOne({ _id: id })
    },
    jobs: async (_: any, __: any, { dataSources }: any) => {
      return await Job.find()
    },
    job: async (_: any, { id }: any, { dataSources }: any) => {
      return await Job.findOne({ _id: id })
    }
  },
  Mutation: {
    createUser: async (_: any, { name, email, password }: any, { dataSources }: any) => {
      try {
        const user = await User.create({ name, email, password })
        return await User.findOne({ _id: user._id })
      } catch (err) {
        console.log(err)
      }
      return null
    },
    updateUser: async (_: any, { id, name, email, password }: any, { dataSources }: any) => {
      return await User.findOneAndUpdate({ id }, { name, email, password })
    },
    deleteUser: async (_: any, { id }: any, { dataSources }: any) => {
      return await User.findOneAndDelete({ id })
    },
    createJob: async (_: any, { name, offerStartDate, offerEndDate, active, company, ratePerHour, tools, disciplines, jobDescription, jobType, location }: any, { dataSources }: any) => {
      return await Job.create({ name, offerStartDate, offerEndDate, active, company, ratePerHour, tools, disciplines, jobDescription, jobType, location })
    },
    updateJob: async (_: any, { id, name, offerStartDate, offerEndDate, active, company, ratePerHour, tools, disciplines, jobDescription, jobType, location }: any, { dataSources }: any) => {
      return await Job.findOneAndUpdate({ id }, { name, offerStartDate, offerEndDate, active, company, ratePerHour, tools, disciplines, jobDescription, jobType, location })
    },
    deleteJob: async (_: any, { id }: any, { dataSources }: any) => {
      return await Job.findByIdAndDelete({ id })
    }
  }
}
