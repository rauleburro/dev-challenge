import { logout, selectUser } from "@/store/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsideMenuItem from "./AsideMenuItem";

interface AsideProps {}

const Aside = ({}: AsideProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push("/login");
  }, [dispatch, router]);

  const user = useSelector(selectUser);

  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
      <div>
        {user && (
          <div className="mt-8 text-center">
            <Image
              src="/images/second_user.webp"
              alt=""
              height={112}
              width={112}
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              {user?.name}
            </h5>
            <span className="hidden text-gray-400 lg:block">{user?.email}</span>
          </div>
        )}

        <ul className="mt-8 space-y-2 tracking-wide">
          <AsideMenuItem
            label="Home"
            href="/"
            selected={router.pathname === "/"}
          />
          <AsideMenuItem
            label="Jobs"
            href="/jobs"
            selected={router.pathname === "/jobs"}
          />
          {user && user.role === 'Recruiter' && (
            <AsideMenuItem
              label="My posts"
              href="/posts"
              selected={router.pathname === "/posts"}
            />
          )}
        </ul>
      </div>
      {user && (
        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">
              Logout
            </span>
          </button>
        </div>
      )}
    </aside>
  );
};

export default Aside;
