// post request is used to prevent other people from just accessing this information by logging in.

import {backendClient} from "../../../client";

export default async function handler(req, res) {
    const {slug} = req.query;
    const {data} = await backendClient.get(`/blog/${slug}`)
    console.log(data)
    res.status(200).json(data);

}
