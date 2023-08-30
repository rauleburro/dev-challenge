import { GET_USER } from '@/graphql/graphql'
import { useQuery } from '@apollo/client'

const useGetUser = (userId: number) => {
	return useQuery(GET_USER, {
		variables: { userId },
	})
}

export default useGetUser
