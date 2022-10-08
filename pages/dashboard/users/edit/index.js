import {useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function Users() {
    const {connected, publicKey} = useWallet();
    const [user, setUser] = useState(null);
    const router = useRouter()
    useEffect(() => {
        if (!connected && publicKey) {
            router.push("/auth", 'login');
        }
        // if (publicKey !== null && user === null) {
        //     checkUser(publicKey, setUser);
        // }
    }, [publicKey, user])

    return <div>
        k
    </div>
}

export default Users;