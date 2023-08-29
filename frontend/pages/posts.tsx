import Link from "next/link";
import { useCallback, useState } from "react";
import Button from "@/components/Button";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";
import PostList from "@/components/PostsList";
import Dashboard from "./dashboard";

const Jobs = () => {
  const [query, setQuery] = useState("");
  const user = useSelector(selectUser);

  const search = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <Dashboard>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-row justify-between">
          <h1 className="col-span-3 text-3xl font-bold text-gray-700 dark:text-white">
            My posts
          </h1>
          <Link href="/jobs/create">
            {user && (
              <Button
                text="Post a job"
                type="button"
                onClick={() => {}}
                disabled={false}
              />
            )}
          </Link>
        </div>
        <PostList query={query} />
      </div>
    </Dashboard>
  );
};

export default Jobs;
