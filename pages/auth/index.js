import { Center, useToast } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect } from "react";
import { frontendClient } from "../../client";
import { useRouter } from "next/router";

function Login() {
  const { connected, publicKey } = useWallet();
  const router = useRouter();
  const toast = useToast({
    position: "bottom-right",
  });

  async function onWalletConnected() {
    try {
      const { data } = await frontendClient.post("/api/login", {
        pubKey: publicKey,
      });
      if (!toast.isActive(1)) {
        toast({
          title: "Successfully logged in",
          description: "Redirecting to dashboard a second",
          status: "success",
          variant: "left-accent",
          duration: 1e3,
          id: 1,
        });
      }
      setTimeout(() => {
        router.push("/dashboard");
      }, 1e3);
    } catch (e) {
      toast({
        title: "User not in club.",
        description:
          "possess an invite code? register to continue. Redirecting in 3s",
        variant: "left-accent",
        isClosable: false,
        status: "error",
      });
      onNoAccount();
    }
  }

  const onNoAccount = useCallback(() => {
    setTimeout(() => {
      router.push("/auth/register");
    }, 3e3);
  }, []);
  useEffect(() => {
    if (connected) {
      onWalletConnected();
    }
  }, [connected]);
  return (
    <Center className={"h-cover"}>
      <div className="flex flex-col items-center space-y-5">
        <WalletMultiButton />
        <div className={"text-center text-xl tracking-wide uppercase"}>
          Connect your solana wallet to continue
        </div>
      </div>
    </Center>
  );
}

export default Login;
