import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query Job($jobId: ID!) {
    job(id: $jobId) {
      id
      name
      offerStartDate
      offerEndDate
      active
      company
      ratePerHour
      tools
      disciplines
      jobDescription
      jobType
      location
      user
      applied
    }
  }
`;

export const GET_JOBS = gql`
  query Jobs($query: String) {
    jobs(query: $query) {
      id
      name
      offerStartDate
      offerEndDate
      active
      company
      ratePerHour
      tools
      disciplines
      jobDescription
      jobType
      location
    }
  }
`;

export const APPLY_JOB = gql`
  mutation ApplyToJob($applyToJobId: ID!) {
    applyToJob(id: $applyToJobId) {
      id
      name
      offerStartDate
      offerEndDate
      active
      company
      ratePerHour
      tools
      disciplines
      jobDescription
      jobType
      location
      user
      applied
    }
  }
`;

export const GET_POSTS = gql`
  query MyPosts {
    myPosts {
      id
      name
      offerStartDate
      offerEndDate
      active
      company
      ratePerHour
      tools
      disciplines
      jobDescription
      jobType
      location
    }
  }
`;

export const GET_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      id
      email
      name
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
        name
        role
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(name: $name, email: $email, password: $password, role: $role) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob(
    $name: String!
    $offerStartDate: String!
    $offerEndDate: String!
    $active: Boolean!
    $company: String!
    $ratePerHour: Float!
    $tools: [String!]!
    $disciplines: [String!]!
    $jobDescription: String!
    $jobType: String!
    $location: String!
  ) {
    createJob(
      name: $name
      offerStartDate: $offerStartDate
      offerEndDate: $offerEndDate
      active: $active
      company: $company
      ratePerHour: $ratePerHour
      tools: $tools
      disciplines: $disciplines
      jobDescription: $jobDescription
      jobType: $jobType
      location: $location
    ) {
      id
    }
  }
`;
