
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import {} from "@apollo/"

const apolloClient = new ApolloClient({
    headers : {
        Authorization : `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,

    },
    uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
    cache: new InMemoryCache(),
});

export default apolloClient;