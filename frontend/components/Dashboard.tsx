import Aside from '@/components/Aside'
import { selectToken } from '@/store/authSlice'
import Image from 'next/image'
import { useSelector } from 'react-redux'

interface DashboardProps {
	children: React.ReactNode
	search?: React.ReactNode
}

const Dashboard = ({ search, children }: DashboardProps) => {
	return (
		<>
			<Aside />
			<div className={`mb-6 ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]`}>
				<div className="sticky top-0 flex h-16 flex-1 border-b bg-white dark:border-gray-700 dark:bg-gray-800 lg:py-2.5">
					<div className="flex flex-1 items-center 2xl:container">
						<button className="h-16 w-16 border-r dark:border-gray-700 dark:text-gray-300 lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mx-4 my-auto h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
						<div className="flex flex-1">{search}</div>
					</div>
				</div>
				<div className="px-6 pt-6 2xl:container">{children}</div>
			</div>
		</>
	)
}

export default Dashboard
