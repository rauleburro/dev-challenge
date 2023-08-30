import { GraphQLError } from 'graphql'
import config from '../../../config/confg'
import Job from '../../../models/JobSchema'
import User from '../../../models/UserSchema'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export const resolvers = {
  Query: {
    users: async (_: any, __: any) => {
      return await User.find()
    },
    user: async (_: any, { id }: any) => {
      return await User.findOne({ _id: id })
    },
    job: async (_: any, { id }: any, { user }: any) => {
      const job = await Job.findOne({ _id: id })
      if (job == null) {
        throw new GraphQLError('Job does not exist', {
          extensions: {
            code: 'BAD_USER_INPUT',
            http: { status: 400 }
          }
        })
      }

      job.applied = false

      if (user != null) {
        job.applied = job.applicants.includes(user.id)
      }

      return job
    },
    jobs: async (_: any, { query }: any) => {
      const jobs = await Job.find()
      if (query == null) {
        return jobs
      }
      const regex = new RegExp(query, 'i')
      if (jobs.length > 0) {
        return jobs.filter((job: any) => {
          return job.name.match(regex)
        })
      }
      return jobs
    },
    myPosts: async (_: any, __: any, { user }: any) => {
      return await Job.find({ user })
    }
  },
  Mutation: {
    login: async (_: any, { email, password }: any) => {
      try {
        const user = await User.findOne({ email })
        if (user == null) {
          throw new GraphQLError('User does not exist', {
            extensions: {
              code: 'BAD_USER_INPUT',
              http: { status: 400 }
            }
          })
        }
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
          throw new GraphQLError('Password is incorrect', {
            extensions: {
              code: 'BAD_USER_INPUT',
              http: { status: 400 }
            }
          })
        }

        const token = jwt.sign(user.toJSON(), config.jwt.secret, {
          expiresIn: '1d'
        })
        return {
          token,
          user
        }
      } catch (err) {
        console.log(err)
        throw new GraphQLError('User does not exist', {
          extensions: {
            code: 'BAD_USER_INPUT',
            http: { status: 400 }
          }
        })
      }
    },
    createUser: async (_: any, { name, email, password, role }: any) => {
      try {
        const user = await User.create({ name, email, password, role })
        const token = jwt.sign(user.toJSON(), config.jwt.secret, {
          expiresIn: '1d'
        })
        return {
          token,
          user
        }
      } catch (err) {
        console.log(err)
        throw new GraphQLError('User already exists', {
          extensions: {
            code: 'BAD_USER_INPUT',
            http: { status: 400 }
          }
        })
      }
    },
    updateUser: async (
      _: any,
      { id, name, email, password }: any,
      { user }: any
    ) => {
      return await User.findOneAndUpdate({ id }, { name, email, password })
    },
    deleteUser: async (_: any, { id }: any, { user }: any) => {
      return await User.findOneAndDelete({ id })
    },
    createJob: async (
      _: any,
      {
        name,
        offerStartDate,
        offerEndDate,
        active,
        company,
        ratePerHour,
        tools,
        disciplines,
        jobDescription,
        jobType,
        location
      }: any,
      { user }: any
    ) => {
      return await Job.create({
        name,
        offerStartDate,
        offerEndDate,
        active,
        company,
        ratePerHour,
        tools,
        disciplines,
        jobDescription,
        jobType,
        location,
        user
      })
    },
    updateJob: async (
      _: any,
      {
        id,
        name,
        offerStartDate,
        offerEndDate,
        active,
        company,
        ratePerHour,
        tools,
        disciplines,
        jobDescription,
        jobType,
        location
      }: any,
      { dataSources }: any
    ) => {
      return await Job.findOneAndUpdate(
        { id },
        {
          name,
          offerStartDate,
          offerEndDate,
          active,
          company,
          ratePerHour,
          tools,
          disciplines,
          jobDescription,
          jobType,
          location
        }
      )
    },
    deleteJob: async (_: any, { id }: any, { user }: any) => {
      const job = await Job.findOne({ _id: id })
      if (job?.user !== user.id) {
        throw new GraphQLError('User is not authorized', {
          extensions: {
            code: 'UNAUTHORIZED',
            http: { status: 401 }
          }
        })
      }
      return await Job.findByIdAndDelete({ id })
    },
    applyToJob: async (_: any, { id }: any, { user }: any) => {
      const job = await Job.findOne({ _id: id })
      if (job == null) {
        throw new GraphQLError('Job does not exist', {
          extensions: {
            code: 'BAD_USER_INPUT',
            http: { status: 400 }
          }
        })
      }
      if (job?.user === user.id) {
        throw new GraphQLError('User is not authorized', {
          extensions: {
            code: 'UNAUTHORIZED',
            http: { status: 401 }
          }
        })
      }
      job.applicants.push(user.id)
      await job.save()
      return job
    }
  }
}
