import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "../styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo } from "react";
import {ChakraProvider, Container, useColorMode, useColorModePreference} from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import theme from "../chakra/theme";
function MyApp({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ChakraProvider theme={theme}>
            <NavigationBar/>
            <Container maxW={"container.lg"} className={"text-[#f4f1d0]"}>
              <Component {...pageProps}></Component>
            </Container>
            <Footer/>
          </ChakraProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
