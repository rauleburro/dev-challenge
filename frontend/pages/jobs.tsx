import { gql, useQuery } from "@apollo/client";

const GET_JOBS = gql`
  query Jobs {
    jobs {
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
      createdAt
      updatedAt
    }
  }
`;

const Jobs = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Jobs</h1>
      {data && data.jobs.map((job: any) => <div key={job.id}>{job.name}</div>)}
    </div>
  );
};

export default Jobs;
