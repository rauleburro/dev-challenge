import Job from "@/models/Job";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import JobItem from "./JobItem";

const GET_JOBS = gql`
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

interface JobListProps {
  query: string;
}

const JobList = ({ query }: JobListProps) => {
  const { loading, error, data } = useQuery(GET_JOBS, {
    variables: { query: query },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data &&
        data.jobs.map((job: Job) => (
          <JobItem key={job.id} job={job} />
        ))}
    </>
  );
};

export default JobList;
