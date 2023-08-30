import Job from '@/models/Job'
import Link from 'next/link'

interface JobItemProps {
	job: Job
}

const JobItem = ({ job }: JobItemProps) => {
	return (
		<div key={job.id} className="">
			<Link href={`/jobs/${job.id}`}>
				<div className="group h-full space-y-6 rounded-xl border border-gray-200/50 bg-white bg-opacity-50  p-4 shadow-2xl shadow-gray-600/10 hover:border-primary dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-primaryDark">
					<h5 className="text-lg text-center text-gray-600 dark:text-gray-300">{job.company}</h5>
					<h3 className="text-2xl font-bold text-gray-700 dark:text-white">{job.name}</h3>
					<span className="block text-gray-500 dark:text-gray-400">{job.location}</span>
				</div>
			</Link>
		</div>
	)
}

export default JobItem
