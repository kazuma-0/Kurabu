import { useCallback, useReducer, useState } from "react";
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import signUpFormReducer, {
  formInitialState,
} from "../../reducers/signUpFormReducer";
import { frontendClient } from "../../client";
import { AnimatePresence, motion } from "framer-motion";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import UserForm from "../../components/UserForm";
import { useRouter } from "next/router";

function Invite(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 h-full w-full bg-black/90 rounded shadow"
    >
      <Center className="h-full">
        <div className="rounded shadow p-5 bg-[#101014] lg:w-80">
          <FormControl>
            <FormLabel>Enter your invite code</FormLabel>
            <Input value={props.value} onChange={props.onChange} type="text" />
            <FormHelperText>
              Enter your invite code to continue (case sensitive)
            </FormHelperText>
            <Center>
              <Button
                onClick={props.onClick}
                disabled={props.value === ""}
                variant={"outline"}
                isLoading={props.loading}
                mt={2}
                colorScheme={"whatsapp"}
              >
                Submit
              </Button>
            </Center>
          </FormControl>
        </div>
      </Center>
    </motion.div>
  );
}

function Register() {
  const { connected, publicKey } = useWallet();
  const modal = useWalletModal();

  const reconnect = useCallback(() => {
    if (!connected) {
      modal.setVisible(true);
      return;
    }
    modal.setVisible(false);
    dispatch({
      type: "pubKey",
      field: "pubKey",
      payload: publicKey.toBase58(),
    });
  }, [publicKey]);
  const [formState, dispatch] = useReducer(signUpFormReducer, formInitialState);
  const [loading, setLoading] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [code, setCode] = useState("");
  const [valid, setValid] = useState(false);
  const router = useRouter();
  const toast = useToast({
    position: "bottom-right",
    containerStyle: {
      color: "#000",
    },
  });
  const validateInviteCode = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await frontendClient.post("/validate-invite", {
        code: code,
      });
      setValid(true);
      setLoading(false);
      toast({
        title: "Invite code accepted",
        status: "success",
        description:
          "Do not navigate away from this page. Your invite code will work only once",
      });
    } catch (e) {
      setLoading(false);
      toast({
        title: "Invalid/Expired invite code",
        status: "error",
        // description:""
      });
    }
  }, [code]);

  const dispatcher = useCallback((e) => {
    console.log(e.target.value);
    dispatch({
      type: e.target.name,
      field: e.target.name,
      payload: e.target.value,
    });
  }, []);

  async function signUp() {
    setLoadingSignUp(true);
    try {
      const { data } = await frontendClient.post("/sign-up", {
        name: formState.name,
        department: formState.department,
        branch: formState.branch,
        roll_number: formState.roll_number,
        pubKey: formState.pubKey,
        email: formState.email,
        role: formState.role,
      });
      console.log(data);
      setLoadingSignUp(false);
      toast({
        title: "Account created successfully",
        description: "Redirecting to dashboard a second.",
        status: "success",
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1e3);
    } catch (e) {
      console.log(e);
      toast({
        title: "Signup failed",
        description: e.response.data.message,
        status: "error",
      });
      setLoadingSignUp(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    setCode(e.target.value);
  }

  return (
    <div className={"h-cover relative"}>
      <UserForm
        onSubmit={handleSubmit}
        onChange={dispatcher}
        formState={formState}
        onClick={(e) => {
          e.preventDefault();
          reconnect();
        }}
        loading={loadingSignUp}
        onClick1={signUp}
      />
      <AnimatePresence>
        {!valid && (
          <Invite
            value={code}
            onChange={handleInput}
            onClick={validateInviteCode}
            loading={loading}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Register;
