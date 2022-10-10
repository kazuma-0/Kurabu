import { useEffect, useRef, useState } from "react";
import { frontendClient } from "../../../client";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";
import { useWallet } from "@solana/wallet-adapter-react";
import { checkUser } from "../../../utils";

function Delete() {
  const { connected, publicKey } = useWallet();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!connected && publicKey) {
      router.push("/auth");
    }
    // if (publicKey !== null && user === null) {
    //     checkUser(publicKey, setUser);
    // }
  }, [publicKey, user]);
  const toast = useToast({
    position: "bottom-right",
    variant: "left-accent",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blog, setBlog] = useState(null);
  const [blogPosts, setBlogPosts] = useState(null);

  async function fetchBlogPosts() {
    const { data } = await frontendClient.get("blog/all");
    setBlogPosts(data);
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  const leastRef = useRef();

  function onClickDelete(id) {
    setBlog(blogPosts.find((_blogPost) => _blogPost.id === id));
    onOpen();
  }

  async function deleteblogPost() {
    try {
      const { status } = await frontendClient.post("blog/delete", {
        id: blog.id,
        pubKey: publicKey.toBase58(),
      });
      toast({
        title: "blog post deleted successfully",
        status: "success",
      });
      fetchBlogPosts();
      onClose();
    } catch (e) {
      toast({
        title: "Unable to delete blog post",
        status: "error",
      });
      onClose();
    }
  }

  return (
    <div className={"h-cover"}>
      <Container maxW={"container.sm"}>
        {blogPosts?.map((blog) => (
          <div
            key={blog.id}
            className={
              "h-24 rounded-lg shadow-lg ring-1 ring-white/30 hover:ring-white/80 transition-all px-5 bg-[#16171d] flex items-center justify-between"
            }
          >
            <h3 className={"text-2xl flex items-center font-bold"}>
              {blog.title} - {blog.author}
            </h3>
            <IconButton
              onClick={() => {
                onClickDelete(blog.id);
              }}
              aria-label={"delete"}
              variant={"outline"}
              icon={<IconTrash color={"red"} />}
            ></IconButton>
          </div>
        ))}
      </Container>
      <AlertDialog
        leastDestructiveRef={leastRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Delete &quot;{blog?.title} &quot;
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can&quot;t undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={leastRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteblogPost} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default Delete;
