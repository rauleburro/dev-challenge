import { gql } from 'graphql-tag'

export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  createdAt: String!
  updatedAt: String!
}

type Job {
  id: ID!
  name: String!
  offerStartDate: String!
  offerEndDate: String!
  active: Boolean!
  company: String!
  ratePerHour: Float!
  tools: [String!]!
  disciplines: [String!]!
  jobDescription: String
  jobType: String!
  location: String!
  createdAt: String!
  updatedAt: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User!
  jobs: [Job!]!
  job(id: ID!): Job!
}

type Mutation {
  createUser(name: String!, email: String!, password: String!): User!
  updateUser(id: ID!, name: String, email: String, password: String): User!
  deleteUser(id: ID!): User!
  createJob(name: String!, offerStartDate: String!, offerEndDate: String!, active: Boolean!, company: String!, ratePerHour: Float!, tools: [String!]!, disciplines: [String!]!, jobDescription: String!, jobType: String!, location: String!): Job!
  updateJob(id: ID!, name: String, offerStartDate: String, offerEndDate: String, active: Boolean, company: String, ratePerHour: Float, tools: [String!], disciplines: [String!], jobDescription: String, jobType: String, location: String): Job!
  deleteJob(id: ID!): Job!
}
`
