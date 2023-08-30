import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Dashboard from "../../components/Dashboard";
import { selectUser } from "@/store/authSlice";
import { useCallback } from "react";
import Button from "@/components/Button";
import { APPLY_JOB, GET_JOB } from "@/graphql/graphql";
import DetailArrayField from "@/components/DetailArrayField";

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

  const user = useSelector(selectUser);

  const handleApply = useCallback(async () => {
    confirm("Are you sure you want to apply to this job?") &&
      (await applyJob());
    router.push("/jobs");
  }, [applyJob, router]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-white">Error: {error.message}</p>;

  const { job } = data;

  return (
    <Dashboard>
      <div className="flex h-[80vh] w-full items-center justify-center rounded-xl">
        <div className="h-full w-full space-y-6 group p-4 rounded-3xl bg-white border border-gray-200/50  dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:border-primary dark:hover:border-primaryDark">
          <div className="">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
              {job.name}
            </h3>
            {user?.role == "Talent" && (
              <>
                {job.applied ? (
                  <p className="text-green-600 px-4 py-2 rounded-md ">
                    Applied
                  </p>
                ) : (
                  <Button
                    text="Apply"
                    type="button"
                    disabled={applyLoading}
                    onClick={handleApply}
                  />
                )}
              </>
            )}
          </div>
          <h5 className="text-xl text-gray-600 dark:text-gray-300">
            {job.company}
          </h5>
          <span className="block text-gray-500 dark:text-gray-400">
            {job.location} - {job.jobType}
          </span>

          <span className="block text-gray-500 dark:text-gray-400">
            Rate per hour: {job.ratePerHour} U$D
          </span>
          <DetailArrayField label="Tools" array={job.tools} />
          <DetailArrayField label="Disciplines" array={job.disciplines} />
          <span className="block text-gray-500 dark:text-gray-400">
            {job.jobDescription}
          </span>
        </div>
      </div>
    </Dashboard>
  );
};

export default JobPage;
