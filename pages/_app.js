import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {clusterApiUrl} from "@solana/web3.js";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import {ConnectionProvider, WalletProvider,} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import "../styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import {useMemo} from "react";
import {ChakraProvider, Container} from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import theme from "../chakra/theme";
import '../styles/unreset.css'

function MyApp({Component, pageProps, router}) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <ChakraProvider theme={theme}>
                        <NavigationBar/>
                        <Container maxW={"container.lg"}>
                            <div key={router.route} className={"test-anim"}>
                                <Component {...pageProps}></Component>
                            </div>
                        </Container>
                        <Footer/>
                    </ChakraProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default MyApp;
