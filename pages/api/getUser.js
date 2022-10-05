// post request is used to prevent other people from just accessing this information by logging in.
import {backendClient} from "../../client";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(401).json("Method not allowed")
        return;
    }
    try {
        const {data} = await backendClient.get(`/auth/user/${req.body.pubKey}`,{
            headers:{
                auth: req.body.pubKey
            }
        });
        res.status(200).json(data);
    } catch (e) {
        res.status(401).json("User not in club");
    }
}
