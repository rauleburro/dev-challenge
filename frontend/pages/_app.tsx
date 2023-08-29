import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import useCustomApolloClient from "@/graphql/apollo-client";
import { selectToken } from "@/store/authSlice";

const ApolloApp = ({ Component, pageProps }: AppProps) => {
  const token = useSelector(selectToken);
  const client = useCustomApolloClient(token);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ApolloApp Component={Component} {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
