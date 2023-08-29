import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer"
          hidden
          aria-hidden="true"
        />
        <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
          <div className="xl:container m-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                    <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
                  </div>
                  <span className="text-base font-bold text-gray-600 dark:text-white">
                    SASS
                  </span>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link
                        href="#"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/jobs"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Jobs</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    href="/register"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                      Sign Up
                    </span>
                  </Link>
                  <Link
                    href="/login"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
              Build in your way but with our experts{" "}
              <span className="text-primary dark:text-primaryLight">
                Support.
              </span>
            </h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300">
              Odio incidunt nam itaque sed eius modi error totam sit illum.
              Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis
              beatae ipsum soluta!
            </p>
            <div>
              <form action="" className="w-full mt-12">
                <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                  <div className="pl-6 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Your mail address"
                    className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent"
                    type="email"
                  />
                  <div className="md:pr-1.5 lg:pr-0">
                    <button
                      type="button"
                      title="Start buying"
                      className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                        Get Started
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
            <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
              <img
                src="./images/clients/airbnb.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/ge.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/coty.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/microsoft.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img
              src="images/project.svg"
              alt="project illustration"
              height=""
              width=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
