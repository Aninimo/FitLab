import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlUri = process.env.REACT_APP_GRAPHQL_URI;

const client = new ApolloClient({
  uri: graphqlUri,
  cache: new InMemoryCache(),
});

export default client;
