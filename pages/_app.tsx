import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import Head from "next/head";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress();

  return (
    <ThirdwebProvider activeChain={Mumbai}>
      <Head>
        <title>Token Creator</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
