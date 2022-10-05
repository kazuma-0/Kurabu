import {checkUser} from "../../../utils";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useToast} from "@chakra-ui/react";
import {useWallet} from "@solana/wallet-adapter-react";
import EditorLayout from "../../../components/EditorLayout";

function Blog(){
    const toast = useToast({})
    const router = useRouter()
    const {connected, publicKey} = useWallet();
    const [user, setUser] = useState(null);
    const [css, setCss] = useState('')
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        if (!connected && publicKey) {
            router.push('/auth')
        }
        if (publicKey !== null) {
            checkUser(publicKey, setUser);
        }
    }, [publicKey])

    return (
        <div className={"h-cover"}>
        <h1 className={"text-4xl uppercase font-bold font-ligurino tracking-wider pb-5"}>New post</h1>
            <EditorLayout markdown={markdown} css={css}/>
        </div>
    )
}

export default Blog;