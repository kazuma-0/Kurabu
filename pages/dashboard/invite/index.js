import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect, useState } from "react";
import { frontendClient } from "../../../client";

function Invite() {
  const { connected, publicKey } = useWallet();
  const [user, setUser] = useState(null);
  const [codes, setCodes] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listView = useDisclosure();
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!connected && publicKey) {
      router.push("/auth");
    }
    if (publicKey) {
      fetchInviteCodes();
      // checkUser(publicKey, setUser);
    }
  }, [publicKey]);

  const fetchInviteCodes = useCallback(async () => {
    try {
      const { data } = await frontendClient.get("/api/invite/codes", {
        headers: {
          pubKey: publicKey?.toBase58(),
        },
      });

      setCodes(data);
    } catch (e) {
      console.error(e);
    }
  }, [publicKey]);
  const generateInviteCodes = useCallback(async () => {
    try {
      await frontendClient.post("/api/invite/generate-invites", {
        auth: publicKey?.toBase58(),
        count: count,
      });
      onClose();
      fetchInviteCodes();
    } catch (e) {
      console.error(e);
    }
  }, [publicKey, count]);

  function copy(code) {
    window.navigator.clipboard.writeText(code);
  }

  return (
    <div className={"h-cover"}>
      <Stack direction={"row"}>
        <Button onClick={onOpen} colorScheme={"linkedin"}>
          New code
        </Button>
        <Button onClick={listView.onOpen} colorScheme={"linkedin"}>
          List view
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Generate invite codes</ModalHeader>
            <ModalBody>
              <Input
                type={"number"}
                onChange={(e) => {
                  let ctr = Number(e.target.value);
                  if (ctr === 0) {
                    setCount(1);
                    return;
                  }
                  setCount(Math.min(30, ctr));
                }}
                placeHolder={"How many invite codes do you want?"}
                value={count}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={generateInviteCodes}
                variant={"outline"}
                colorScheme={"whatsapp"}
              >
                Generate
              </Button>
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <Modal isOpen={listView.isOpen} onClose={listView.onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Invite codes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {codes?.map((code) => (
                <div key={code.id}>{code.code}</div>
              ))}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <div className="grid grid-cols-4 gap-10 py-10">
        {codes?.map((code) => (
          <div
            key={code.id}
            onClick={() => {
              copy(code.code);
            }}
            className="p-2 bg-[#16171d] hover:bg-[#1b1b1d] transition-all cursor-pointer text-xl tracking-wider ring-1 ring-white/30 rounded-lg"
          >
            <Center>
              <Tooltip label={"click to copy"} hasArrow>
                {code.code}
              </Tooltip>
            </Center>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invite;
