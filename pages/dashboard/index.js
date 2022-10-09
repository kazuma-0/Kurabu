import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import {
  IconBarcode,
  IconCodeCircle2,
  IconCodePlus,
  IconEditCircle,
  IconFilePencil,
  IconPlus,
  IconTrash,
  IconTrashOff,
} from "@tabler/icons";
import Link from "next/link";
import Loader from "../../components/loader";
import { checkUser } from "../../utils";

function MenuOption({ link, text, icon }) {
  return (
    <Link href={link}>
      <div className="bg-[#16171d] ring-2 hover:scale-[101%] transition-all cursor-pointer ring-white/30 h-16 rounded grid grid-cols-4">
        <Center className={" rounded-full "}>{icon}</Center>
        <div className={"col-span-3 flex items-center text-xl "}>{text}</div>
      </div>
    </Link>
  );
}

function Dashboard() {
  const router = useRouter();
  const toast = useToast({});

  const { connected, publicKey } = useWallet();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!connected && publicKey) {
      router.push("/auth");
    }
    if (publicKey !== null) {
      checkUser(publicKey, setUser);
    }
  }, [publicKey]);

  return (
    <div className={"h-cover"}>
      <h1 className={"text-2xl uppercase"}>User area</h1>
      <hr className={"mt-2"} />
      <div className="grid grid-cols-4 py-5 gap-5">
        <MenuOption link={"/"} icon={<IconPlus />} text={"New blog post"} />
        <MenuOption
          link={"/"}
          icon={<IconFilePencil />}
          text={"Edit blog post"}
        />
        <MenuOption link={"/"} icon={<IconTrash />} text={"Delete blog post"} />
      </div>

      {user?.role === "Executive" || user?.role === "Teacher" ? (
        <>
          <h1 className={"text-2xl uppercase"}>Admin area</h1>
          <hr className={"mt-2"} />
          <div className="grid grid-cols-3 py-5 gap-5">
            <MenuOption
              link={"dashboard/event/new"}
              icon={<IconPlus />}
              text={"New event"}
            />
            <MenuOption
              link={"dashboard/event/edit"}
              icon={<IconFilePencil />}
              text={"Edit event"}
            />
            <MenuOption
              link={"/dashboard/event/delete"}
              icon={<IconTrash />}
              text={"Delete Event"}
            />
            <MenuOption
              link={"/dashboard/users/edit"}
              icon={<IconEditCircle />}
              text={"Edit club member"}
            />
            <MenuOption
              link={"/dashboard/invite"}
              icon={<IconCodePlus />}
              text={"Invite code"}
            />
          </div>
        </>
      ) : (
        ""
      )}
      {user === null ? <Loader /> : ""}
    </div>
  );
}

export default Dashboard;
