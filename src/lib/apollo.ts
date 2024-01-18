import { SERVER_URL } from "@/config/environment";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

export default client;
