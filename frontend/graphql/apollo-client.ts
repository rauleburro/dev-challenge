import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'

const useCustomApolloClient = (token: string | null) => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
	})

	const authLink = new ApolloLink((operation, forward) => {
		operation.setContext(({ headers = {} }) => ({
			headers: {
				...headers,
				authorization: token ? `${token}` : '',
			},
		}))

		return forward(operation)
	})

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	})

	return client
}

export default useCustomApolloClient
