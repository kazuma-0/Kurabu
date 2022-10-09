import { backendClient } from "../../../client";

export default async function handler(req, res) {
    try {
        const { data } = await backendClient.get('/invite/all', {
            headers: {
                auth: req.headers.pubkey,
            },
        });
        res.status(200).json(data);
    } catch (e) {
        console.log(e)
        res.status(401).json("Unauthorised");
    }
}
