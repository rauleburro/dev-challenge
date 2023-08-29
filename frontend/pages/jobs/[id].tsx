import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dashboard from "../dashboard";

const GET_JOB = gql`
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
    }
  }
`;

const JobPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId: id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-white">Error: {error.message}</p>;

  const { job } = data;

  return (
    <Dashboard>
      <div className="flex h-[80vh] w-full items-center justify-center rounded-xl">
        <div className="h-full w-full space-y-6 group p-4 rounded-3xl bg-white border border-gray-200/50  dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:border-primary dark:hover:border-primaryDark">
          <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
            {job.name}
          </h3>
          <h5 className="text-xl text-gray-600 dark:text-gray-300">
            {job.company}
          </h5>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.location}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.offerStartDate}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.offerEndDate}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.active}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.ratePerHour}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.tools}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.disciplines}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.jobDescription}
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.jobType}
          </span>
        </div>
      </div>
    </Dashboard>
  );
};

export default JobPage;
