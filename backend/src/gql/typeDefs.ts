import { gql } from 'graphql-tag'

export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
}

type Job {
  id: ID!
  name: String!
  offerStartDate: String
  offerEndDate: String
  active: Boolean
  company: String!
  ratePerHour: Float
  tools: [String]
  disciplines: [String]
  jobDescription: String
  jobType: String
  location: String!
}

type AuthPayload {
  token: String
  user: User
}

type Query {
  users: [User!]
  user(id: ID!): User
  jobs(query: String): [Job!]
  job(id: ID!): Job
  myPosts: [Job!]
}

type Mutation {
  login(email: String!, password: String!): AuthPayload!
  createUser(name: String!, email: String!, password: String!): AuthPayload!
  updateUser(id: ID!, name: String, email: String, password: String): User!
  deleteUser(id: ID!): User!
  createJob(name: String!, offerStartDate: String!, offerEndDate: String!, active: Boolean!, company: String!, ratePerHour: Float!, tools: [String!]!, disciplines: [String!]!, jobDescription: String!, jobType: String!, location: String!): Job!
  updateJob(id: ID!, name: String, offerStartDate: String, offerEndDate: String, active: Boolean, company: String, ratePerHour: Float, tools: [String!], disciplines: [String!], jobDescription: String, jobType: String, location: String): Job!
  deleteJob(id: ID!): Job!
}
`
