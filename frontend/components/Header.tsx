import { selectUser } from '@/store/authSlice'
import Link from 'next/link'
import { useSelector } from 'react-redux'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	const user = useSelector(selectUser)
	return (
		<header>
			<input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
			<nav className="navbar peer-checked:navbar-active fixed z-20 w-full bg-white/80 shadow-md shadow-gray-600/5 backdrop-blur dark:bg-gray-900/80 dark:shadow-none md:relative md:bg-transparent">
				<div className="m-auto px-6 xl:container md:px-12">
					<div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3">
						<div className="flex w-full justify-between lg:w-auto">
							<a href="#" aria-label="logo" className="flex items-center space-x-2">
								<div aria-hidden="true" className="flex space-x-1">
									<div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
									<div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
								</div>
								<span className="text-base font-bold text-gray-600 dark:text-white">Jobify</span>
							</a>
							<label
								htmlFor="hbr"
								className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
							>
								<div
									aria-hidden="true"
									className="m-auto h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
								></div>
								<div
									aria-hidden="true"
									className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
								></div>
							</label>
						</div>
						<div className="navmenu mb-16 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-300/20 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
							<div className="text-gray-600 dark:text-gray-300 lg:pr-4">
								<ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
									<li>
										<Link href="#" className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
											<span>Home</span>
										</Link>
									</li>
									<li>
										<Link
											href="/jobs"
											className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
										>
											<span>Jobs</span>
										</Link>
									</li>
								</ul>
							</div>

							{!user && (
								<div className="-ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:space-y-0 lg:border-l">
									<Link
										href="/register"
										className="relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 focus:before:bg-primary/10 active:duration-75 active:before:scale-95 dark:focus:before:bg-primaryLight/10 sm:px-6"
									>
										<span className="relative text-sm font-semibold text-primary dark:text-primaryLight">Sign Up</span>
									</Link>
									<Link
										href="/login"
										className="relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:px-6"
									>
										<span className="relative text-sm font-semibold text-white dark:text-gray-900">Login</span>
									</Link>
								</div>
							)}
							{user && user.role === 'Recruiter' && (
								<div className="-ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:space-y-0 lg:border-l">
									<Link
										href="/posts"
										className="relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 focus:before:bg-primary/10 active:duration-75 active:before:scale-95 dark:focus:before:bg-primaryLight/10 sm:px-6"
									>
										<span className="relative text-sm font-semibold text-primary dark:text-primaryLight">My posts</span>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
