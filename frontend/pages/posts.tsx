import Link from 'next/link'
import { useCallback, useState } from 'react'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/authSlice'
import PostList from '@/components/PostsList'
import Dashboard from '../components/Dashboard'

const Posts = () => {
	const [query, setQuery] = useState('')
	const user = useSelector(selectUser)

	return (
		<Dashboard>
			<div className="col-span-3 flex flex-row justify-between">
				<h1 className="col-span-3 text-3xl font-bold text-gray-700 dark:text-white">My posts</h1>
				<Link href="/jobs/create">
					{user && <Button text="Post a job" type="button" onClick={() => {}} disabled={false} />}
				</Link>
			</div>

			<PostList query={query} />
		</Dashboard>
	)
}

export default Posts
