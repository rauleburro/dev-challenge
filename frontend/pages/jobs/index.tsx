import { gql, useQuery } from "@apollo/client";
import Dashboard from "../dashboard";
import Link from "next/link";
import Search from "@/components/Search";
import { useCallback, useState } from "react";
import JobList from "@/components/JobList";
import Button from "@/components/Button";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";

const Jobs = () => {
  const [query, setQuery] = useState("");
  const user = useSelector(selectUser);

  const search = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <Dashboard search={<Search search={search} />}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-row justify-between">
          <h1 className="col-span-3 text-3xl font-bold text-gray-700 dark:text-white">
            Jobs
          </h1>
          <Link href="/jobs/create">
            {user && (
              <Button
                text="Create Job"
                type="button"
                onClick={() => {}}
                disabled={false}
              />
            )}
          </Link>
        </div>
        <JobList query={query} />
      </div>
    </Dashboard>
  );
};

export default Jobs;
