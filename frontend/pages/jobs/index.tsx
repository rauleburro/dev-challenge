import { gql, useQuery } from "@apollo/client";
import Dashboard from "../dashboard";
import Link from "next/link";

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
    <Dashboard>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-row justify-between">
          <h1 className="col-span-3 text-3xl font-bold text-gray-700 dark:text-white">
            Jobs
          </h1>
          <Link href="/jobs/create">
            <button
              className="relative flex h-11  items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Create Job
              </span>
            </button>
          </Link>
        </div>
        {data &&
          data.jobs.map((job: any) => (
            <div key={job.id} className="">
              <Link href={`/jobs/${job.id}`}>
                <div className="h-full space-y-6 group p-4 rounded-3xl bg-white border border-gray-200/50  dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:border-primary dark:hover:border-primaryDark">
                  <h5 className="text-center text-xl text-gray-600 dark:text-gray-300">
                    {job.company}
                  </h5>
                  <div className="flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                      {job.name}
                    </h3>
                  </div>
                  <span className="block text-center text-gray-500 dark:text-gray-400">
                    {job.location}
                  </span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Dashboard>
  );
};

export default Jobs;
