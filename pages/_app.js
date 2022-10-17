import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {clusterApiUrl} from "@solana/web3.js";
import {PhantomWalletAdapter, SolflareWalletAdapter} from "@solana/wallet-adapter-wallets";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import "../styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import {useMemo} from "react";
import {ChakraProvider, Container} from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import theme from "../chakra/theme";
import "../styles/unreset.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import Loader from "../components/loader";
import NextNProgress from "nextjs-progressbar";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

function MyApp({Component, pageProps, router}) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], []);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <ChakraProvider theme={theme}>
                        <NavigationBar/>
                        <Container maxW={"container.lg"}>
                            <NextNProgress color="#ffffff60"/>
                            <Component {...pageProps}></Component>
                        </Container>
                        <div className={"bg-[#16171d]/50 ring-1 ring-white/30"}>
                            <Footer/>
                        </div>
                    </ChakraProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default MyApp;


// Connected computing and media processing lab - KNU
// Daegu South Korea
// colab - industrail and academics