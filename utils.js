import {frontendClient} from "./client";

function checkUser(publicKey, setUser) {
    frontendClient.post('/getUser', {
        pubKey: publicKey?.toBase58()
    }).then(({data}) => {
        setUser(data);
    }).catch((e) => {
        console.log("This error should not occur.")
    })
}


export {
    checkUser
}