import { backendClient } from "../../client";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(401).json("Method not allowed");
        return;
    }
    try {
        const { data } = await backendClient.delete(`/auth/user/${req.body.id}`, {
            headers:{
                auth: req.headers.auth,
            }
        });
        console.log(data);
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(406).json(e.response.data);
    }
}
