import { useRouter } from "next/router";
import { useCallback, useState } from "react";

interface IndexSearchProps {}

const IndexSearch = ({}: IndexSearchProps) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/jobs?q=${search}`);
  }, [router, search]);
  return (
    <div>
      <form action="" className="w-full mt-12">
        <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
          <div className="pl-6 py-3">
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              className="w-4 fill-blue-900/60 dark:fill-gray-400"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </div>
          <input
            placeholder="Game Designer"
            className="w-full p-4 rounded-full placeholder-gray-400 dark:placeholder-white bg-transparent"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="md:pr-1.5 lg:pr-0">
            <button
              type="button"
              title="Find me a job"
              className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              onClick={handleClick}
            >
              <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                Find me a job
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IndexSearch;
