import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "@/graphql/apollo-client";
import Guard from "@/components/Guard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
