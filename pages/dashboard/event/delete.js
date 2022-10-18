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
import { useRouter } from "next/router";

function Delete() {
    const { connected, publicKey } = useWallet();
    const [user, setUser] = useState(null);
    const router = useRouter();
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
    const [event, setBlog] = useState(null);
    const [eventPosts, setEvents] = useState(null);

    async function fetchEvents() {
        const { data } = await frontendClient.get("/api/event/all");
        setEvents(data);
    }

    useEffect(() => {
        fetchEvents();
        }, []);
    const leastRef = useRef();

    function onClickDelete(id) {
        setBlog(eventPosts.find((_event) => _event.id === id));
        onOpen();
    }

    async function deleteblog() {
        try {
            const { status } = await frontendClient.post("/api/event/delete", {
                id: event.id,
                pubKey: publicKey.toBase58(),
            });
            toast({
                title: "event deleted successfully",
                status: "success",
            });
            fetchEvents();
            onClose();
        } catch (e) {
            toast({
                title: "Unable to delete event",
                status: "error",
            });
            onClose();
        }
    }

    return (
            <div className={"h-cover"}>
                <Container maxW={"container.sm"}>
                    {eventPosts?.map((event) => (
                            <div
                                key={event.id}
                                className={
                                "h-24 rounded-lg shadow-lg ring-1 ring-white/30 hover:ring-white/80 transition-all px-5 bg-[#16171d] flex items-center justify-between"
                            }
                                >
                                <h3 className={"text-2xl flex items-center font-bold"}>
                                    {event.title} - {event.author}
                                </h3>
                                <IconButton
                                    onClick={() => {
                                        onClickDelete(event.id);
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
                                Delete &quot;{event?.title} &quot;
                            </AlertDialogHeader>
                            <AlertDialogBody>
                                Are you sure? You can&quot;t undo this action afterwards.
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={leastRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme="red" onClick={deleteblog} ml={3}>
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
