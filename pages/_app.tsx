import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Divider,
  Typography,
  Button,
  Box,
} from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress();

  return (
    <ThirdwebProvider activeChain={Mumbai}>
      <Head>
        <title>Test APP</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Token Creator
          </Typography>
          <ConnectWallet
            theme="light"
            detailsBtn={() => {
              return (
                <Button variant="contained" color="success">
                  Wallet Connected
                </Button>
              );
            }}
          />
        </Toolbar>
      </AppBar>
    </ThirdwebProvider>
  );
}

export default MyApp;
