import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import Head from "next/head";
import { Container, Header, Navbar, Nav, Content, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress();

  return (
    <ThirdwebProvider activeChain={Mumbai}>
      <Head>
        <title>Test APP</title>
      </Head>
      <Container>
        <Header>
          <Navbar>
            <Navbar.Brand>Test</Navbar.Brand>
            <Nav pullRight>
              <Nav.Item>
                <ConnectWallet
                  theme="light"
                  detailsBtn={() => {
                    if (!address)
                      return (
                        <Button color="green" appearance="primary">
                          Wallet Connected
                        </Button>
                      );

                    return <Button>My wallet address is {address}</Button>;
                  }}
                />
              </Nav.Item>
            </Nav>
          </Navbar>
        </Header>
        <Content>
          <div>{address ? address.toString() : "nothing..."}</div>
          <Component {...pageProps} />
        </Content>
      </Container>
    </ThirdwebProvider>
  );
}

export default MyApp;
