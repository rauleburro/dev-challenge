import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import ApolloApp from "@/components/ApolloApp";


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
