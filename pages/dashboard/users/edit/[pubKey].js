import { useRouter } from "next/router";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import UserForm from "../../../../components/UserForm";
import { frontendClient } from "../../../../client";
import signUpFormReducer, {
  formInitialState,
} from "../../../../reducers/signUpFormReducer";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

function EditUser() {
  const roles = ["Executive", "User", "Teacher"];
  const { publicKey, connected } = useWallet();
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { pubKey } = router.query;
  const [formState, dispatch] = useReducer(signUpFormReducer, formInitialState);
  const [loading, setLoading] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [code, setCode] = useState("");
  const [valid, setValid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const leastRef = useRef();
  const toast = useToast({
    position: "bottom-right",
    containerStyle: {
      color: "#000",
    },
  });
  useEffect(() => {
    if (!connected && publicKey) {
      router.push("/auth");
      return;
    }
  }, [publicKey, user]);

  useEffect(() => {
    if (publicKey) {
      frontendClient
        .post("/getUser", {
          pubKey: pubKey,
          auth: publicKey,
        })
        .then(({ data }) => {
          setUser(data);
          const keys = Object.keys(data);
          keys.forEach((key) => {
            dispatch({
              type: key,
              field: key,
              payload: data[key],
            });
          });
        })
        .catch((e) => {
          console.log("This error should not occur.");
        });
    }
  }, [publicKey]);

  const dispatcher = useCallback((e) => {
    dispatch({
      type: e.target.name,
      field: e.target.name,
      payload: e.target.value,
    });
  }, []);

  async function Update() {
    setLoading(true);
    try {
      const { data } = await frontendClient.post(
        "/updateUser",
        {
          ...user,
          ...formState,
        },
        {
          headers: {
            auth: publicKey,
          },
        }
      );
      setLoadingSignUp(false);
      toast({
        title: "user update successfully",
        description: "Redirecting to users",
        status: "success",
      });
      router.push("/dashboard/users/edit");
    } catch (e) {
      console.log(e);
      toast({
        title: "Update failed",
        description: e.response.data.message,
        status: "error",
      });
      setLoading(false);
    }
  }

  async function deleteUser() {
    try {
      await frontendClient.post(
        "/deleteUser",
        {
          id: user.id,
        },
        {
          headers: {
            auth: publicKey,
          },
        }
      );
      toast({
        title: `Successfully removed ${user.name}`,
        status: "success",
        duration: 3e3,
      });
      router.push("/dashboard/users/edit");
    } catch (e) {
      console.log(e);
      toast({
        title: `unable to remove ${user.name}`,
        status: "error",
        description: e.message,
      });
      console.error(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    setCode(e.target.value);
  }

  return (
    <div className={"h-cover"}>
      <UserForm
        roles={roles}
        onSubmit={handleSubmit}
        onChange={dispatcher}
        formState={formState}
        onClick={null}
        loading={loading}
        onClick1={Update}
        deleteUser={onOpen}
      />
      <AlertDialog
        leastDestructiveRef={leastRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Are you sure you want to remove{" "}
              <span className={"underline text-red-300"}>{user?.name}</span>{" "}
              from the club?
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button ref={leastRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteUser} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default EditUser;
