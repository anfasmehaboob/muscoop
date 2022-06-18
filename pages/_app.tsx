import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { store } from "../redux/Config/root-store";
import { Provider } from "react-redux";
import "@szhsin/react-menu/dist/core.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
