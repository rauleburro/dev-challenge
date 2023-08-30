import Dashboard from '../../components/Dashboard'
import Link from 'next/link'
import Search from '@/components/Search'
import { useCallback, useState } from 'react'
import JobList from '@/components/JobList'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/authSlice'
import { useRouter } from 'next/router'

const Jobs = () => {
	const { q } = useRouter().query
	const [query, setQuery] = useState(q ? q.toString() : '')
	const user = useSelector(selectUser)

	const search = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}, [])

	return (
		<Dashboard search={<Search search={search} initial={query} />}>
			<div className="col-span-3 flex flex-row justify-between">
				<h1 className="col-span-3 text-3xl font-bold text-gray-700 dark:text-white">Jobs</h1>
				<Link href="/jobs/create">
					{user && user.role == 'Recruiter' && (
						<Button text="Post a job" type="button" onClick={() => {}} disabled={false} />
					)}
				</Link>
			</div>
			<div className="mt-4 grid md:grid-cols-3 gap-4">
				<JobList query={query} />
			</div>
		</Dashboard>
	)
}

export default Jobs
