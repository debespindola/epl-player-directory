import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink ({
      uri: "https://wistful-doctor.us-west-2.aws.cloud.dgraph.io/graphql"
    }),
    cache: new InMemoryCache(),
  });
}