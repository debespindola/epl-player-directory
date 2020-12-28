import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

export default function App({ Components, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}