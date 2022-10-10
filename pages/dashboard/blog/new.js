import { checkUser } from "../../../utils";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import EditorLayout from "../../../components/EditorLayout";
import BlogFormReducer, {
  initialBlogForm,
} from "../../../reducers/BlogFormReducer";
import { frontendClient } from "../../../client";
import { IconLoader } from "@tabler/icons";

function Newblog() {
  const toast = useToast({
    position: "bottom-right",
    variant: "left-accent",
  });
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

  const [formState, dispatch] = useReducer(BlogFormReducer, initialBlogForm);

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

  async function onSubmit() {
    try {
      const { data } = await frontendClient.post("/blog/new", {
        ...formState,
      });
      toast({
        title: "Post created successfully",
        description: "Redirecting in a second",
        variant: "left-accent",
        icon: <IconLoader />,
        duration: 1e3,
      });
      setTimeout(() => {
        router.push(`/blog/${data.slug}`);
      }, 1e3);
    } catch (e) {
      toast({
        title: "Failed to create post",
        description: e.request.data.message,
        status: "error",
      });
    }
  }

  return (
    <div className={"-cover"}>
      <h1
        className={
          "text-4xl uppercase font-bold font-ligurino tracking-wider pb-5"
        }
      >
        New blog post
      </h1>
      <EditorLayout
        dispatcher={dispatcher}
        state={formState}
        onSubmit={onSubmit}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Newblog;
