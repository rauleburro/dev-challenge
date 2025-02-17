import { logout, selectUser } from '@/store/authSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsideMenuItem from './AsideMenuItem'

interface AsideProps {
	show: boolean
	hideFunction: () => void
}

const Aside = ({ show = false, hideFunction = () => {} }) => {
	const dispatch = useDispatch()
	const router = useRouter()
	const handleLogout = useCallback(() => {
		dispatch(logout())
		router.push('/login')
	}, [dispatch, router])

	const user = useSelector(selectUser)

	return (
		<div
			className={` ${
				!show ? 'invisible' : ''
			} lg:visible fixed top-0 z-10 flex h-screen w-3/4 flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 dark:border-gray-700 dark:bg-gray-800 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`}
		>
			<div>
				<div className="my-5 flex w-full justify-between lg:w-auto">
					<Link href="/" aria-label="logo" className="flex items-center space-x-2">
						<div aria-hidden="true" className="flex space-x-1">
							<div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
							<div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
						</div>
						<span className="text-base font-bold text-gray-600 dark:text-white">Jobify</span>
					</Link>
					<button className="lg:hidden" onClick={hideFunction}>
						x
					</button>
				</div>
				{user && (
					<div className="mt-8 text-center">
						<Image
							src="/images/second_user.webp"
							alt=""
							height={112}
							width={112}
							className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
						/>
						<h5 className="mt-4 hidden text-xl font-semibold text-gray-600 dark:text-gray-300 lg:block">
							{user?.name}
						</h5>
						<span className="hidden text-gray-400 lg:block">{user?.email}</span>
					</div>
				)}

				<ul className="mt-8 space-y-2 tracking-wide">
					<AsideMenuItem label="Home" href="/" selected={router.pathname === '/'} />
					<AsideMenuItem label="Jobs" href="/jobs" selected={router.pathname === '/jobs'} />
					{user && user.role === 'Recruiter' && (
						<AsideMenuItem label="My posts" href="/posts" selected={router.pathname === '/posts'} />
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
						<span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
					</button>
				</div>
			)}
		</div>
	)
}

export default Aside
