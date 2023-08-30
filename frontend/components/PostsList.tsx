import Job from '@/models/Job'
import { useQuery } from '@apollo/client'
import JobItem from './JobItem'
import { GET_POSTS } from '@/graphql/graphql'

interface PostListProps {
	query: string
}

const PostList = ({ query }: PostListProps) => {
	const { loading, error, data } = useQuery(GET_POSTS)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>

	return (
		<div className='mt-4 xl:grid-cols-4"> grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{data && data.myPosts.map((job: Job) => <JobItem key={job.id} job={job} />)}
		</div>
	)
}

export default PostList
