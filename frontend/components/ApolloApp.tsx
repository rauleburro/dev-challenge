import useCustomApolloClient from '@/graphql/apollo-client'
import { selectToken } from '@/store/authSlice'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { useSelector } from 'react-redux'

const ApolloApp = ({ Component, pageProps }: AppProps) => {
	const token = useSelector(selectToken)
	const client = useCustomApolloClient(token)
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default ApolloApp
