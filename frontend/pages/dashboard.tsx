import Aside from "@/components/Aside";
import { selectToken } from "@/store/authSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  const token = useSelector(selectToken);

  const isLogged = token ? true : false;

  const widthClass = isLogged ? "lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" : "w-full";
  return (
    <>
      <Aside show={isLogged} />
      <div className={`ml-auto mb-6 ${widthClass}`}>
        <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5 flex flex-1">
          <div className="flex items-center 2xl:container flex-1">
            {token && (
              <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
            <div className="flex flex-1">
              <div className="flex flex-1 items-center text-gray-400 focus-within:text-cyan-400 m-5">
                <span className="absolute left-8 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">{children}</div>
      </div>
    </>
  );
};

export default Dashboard;
