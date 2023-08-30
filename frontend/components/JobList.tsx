import Job from '@/models/Job'
import { useQuery } from '@apollo/client'
import JobItem from './JobItem'
import { GET_JOBS } from '@/graphql/graphql'

interface JobListProps {
	query: string
}

const JobList = ({ query }: JobListProps) => {
	const { loading, error, data } = useQuery(GET_JOBS, {
		variables: { query: query },
	})

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>

	return (
		<div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{data && data.jobs.map((job: Job) => <JobItem key={job.id} job={job} />)}
		</div>
	)
}

export default JobList
