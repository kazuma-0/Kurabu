import { backendClient } from "../../../client";

export default async function handler(req, res) {
    console.log(req.headers.pubKey);
    try {
        const { data } = await backendClient.get(`/achievement/all`);
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(404).json("Not found");
    }
}
