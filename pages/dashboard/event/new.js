import { checkUser } from "../../../utils";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import EditorLayout from "../../../components/EditorLayout";
import eventFormReducer from "../../../reducers/EventFormReducer";
import {frontendClient} from "../../../client";
import {IconLoader} from "@tabler/icons";

function NewEvent() {
  const toast = useToast({
    position:"bottom-right",
    variant: "left-accent"
  })
  const router = useRouter();
  const { connected, publicKey } = useWallet();
  const [user, setUser] = useState(null);
  const [css, setCss] = useState("");
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    if (!connected && publicKey) {
      router.push("/auth");
    }
    if (publicKey !== null && user === null) {
      checkUser(publicKey, setUser);
    }
    console.log(user);

    if (user) {
      dispatch({
        type: "public key",
        field: "pubKey",
        payload: publicKey.toBase58(),
      });
      console.log(formState);
      dispatch({
        type: "author",
        field: "author",
        payload: user?.name,
      });
    }
  }, [publicKey, user]);
  const initialEventForm = {
    title: "",
    image_url: "",
    tags: "",
    description: "",
    markdown: "",
    styles: "",
    author: "",
    pubKey: "",
  };
  const [formState, dispatch] = useReducer(eventFormReducer, initialEventForm);

  const dispatcher = useCallback((e) => {
    console.log(e.target.value);
    dispatch({
      type: e.target.name,
      field: e.target.name,
      payload: e.target.value,
    });
  }, []);

  const onChangeMarkdown = useCallback((e) => {
    dispatch({
      type: "markdown",
      field: "markdown",
      payload: e,
    });
  }, []);
  const onChangeCss = useCallback((e) => {
    dispatch({
      type: "styles",
      field: "styles",
      payload: e,
    });
  }, []);

  async function onSubmit(){
    try{
      const {data} = await frontendClient.post("/event/new",{
        ...formState
      })
      toast({
        title:"Post created successfully",
        description: "Redirecting in 3 seconds.",
        variant:"left-accent",
        icon: <IconLoader/>
      })
    }catch (e){
      toast({
        title:"Failed to create post",
        description: e.request.data.message,
        status:"error"
      })
    }
  }
  return (
    <div className={"-cover"}>
      <h1
        className={
          "text-4xl uppercase font-bold font-ligurino tracking-wider pb-5"
        }
      >
        New post
      </h1>
      <EditorLayout
        onChangeMd={onChangeMarkdown}
        onChangeCss={onChangeCss}
        dispatcher={dispatcher}
        state={formState}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default NewEvent;
