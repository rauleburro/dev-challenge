import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import Dashboard from "../dashboard";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";
import { useCallback } from "react";
import Button from "@/components/Button";

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
      user
      applied
    }
  }
`;

const DELETE_JOB = gql`
  mutation DeleteJob($deleteJobId: ID!) {
    deleteJob(id: $deleteJobId) {
      id
    }
  }
`;

const APPLY_JOB = gql`
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

const JobPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId: id },
  });
  const [applyJob, { loading: applyLoading, error: applyError }] = useMutation(
    APPLY_JOB,
    {
      variables: { applyToJobId: id },
    }
  );
  const [deleteJob, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_JOB, {
      variables: { deleteJobId: id },
    });
  const user = useSelector(selectUser);

  const handleDelete = useCallback(async () => {
    confirm("Are you sure you want to delete this job?") && (await deleteJob());
    router.push("/jobs");
  }, [deleteJob, router]);

  const handleApply = useCallback(async () => {
    confirm("Are you sure you want to apply to this job?") &&
      (await applyJob());
    router.push("/jobs");
  }, [applyJob, router]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-white">Error: {error.message}</p>;

  const { job } = data;
  const isMine = user?.id === job?.user;

  return (
    <Dashboard>
      <div className="flex h-[80vh] w-full items-center justify-center rounded-xl">
        <div className="h-full w-full space-y-6 group p-4 rounded-3xl bg-white border border-gray-200/50  dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:border-primary dark:hover:border-primaryDark">
          <div className="flex flex-row justify-between">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
              {job.name}
            </h3>

            {job.applied ? (
              <p className="text-green-600 px-4 py-2 rounded-md ">Applied</p>
            ) : (
              <Button
                text="Apply"
                type="button"
                disabled={applyLoading}
                onClick={handleApply}
              />
            )}

            {isMine && (
              <button
                className=" text-red-600 px-4 py-2 rounded-md "
                onClick={handleDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              </button>
            )}
          </div>
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
