import { GraphQLError } from 'graphql'
import config from '../../../config/confg'
import Job from '../../../models/JobSchema'
import User from '../../../models/UserSchema'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

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
    login: async (_: any, { email, password }: any, { dataSources }: any) => {
      try {
        const user = await User.findOne({ email })
        if (user == null) {
          return null
        }
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
          return null
        }
        const token = jwt.sign(user.toJSON(), config.jwt.secret, {
          expiresIn: '1d'
        })
        return {
          token
        }
      } catch (err) {
        console.log(err)
      }
    },
    createUser: async (
      _: any,
      { name, email, password }: any,
      { dataSources }: any
    ) => {
      try {
        const user = await User.create({ name, email, password })
        return {
          token: jwt.sign(user.toJSON(), config.jwt.secret, {
            expiresIn: '1d'
          }),
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
      { dataSources }: any
    ) => {
      return await User.findOneAndUpdate({ id }, { name, email, password })
    },
    deleteUser: async (_: any, { id }: any, { dataSources }: any) => {
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
      { dataSources }: any
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
        location
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
    deleteJob: async (_: any, { id }: any, { dataSources }: any) => {
      return await Job.findByIdAndDelete({ id })
    }
  }
}
