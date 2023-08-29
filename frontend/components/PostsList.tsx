import Job from "@/models/Job";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import JobItem from "./JobItem";

const GET_POSTS = gql`
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

interface PostListProps {
  query: string;
}

const PostList = ({ query }: PostListProps) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data && data.myPosts.map((job: Job) => <JobItem key={job.id} job={job} />)}
    </>
  );
};

export default PostList;
