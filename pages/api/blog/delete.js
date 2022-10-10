// post request is used to prevent other people from just accessing this information by logging in.
import { backendClient } from "../../../client";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(401).json("Method not allowed");
        return;
    }
    try {
        const {statusText} = await backendClient.delete(`/blog/${req.body.id}`,{
            headers:{
                auth: req.body.pubKey
            }
        })
        res.status(200).json(statusText);
    } catch (e) {
        res.status(401).json("Unauthorized");
    }
}
