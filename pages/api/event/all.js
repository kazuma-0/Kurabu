// post request is used to prevent other people from just accessing this information by logging in.

import {backendClient} from "../../../client";

export default async function handler(req, res) {

    const {data} =await backendClient.get('/event/all')
    res.status(200).json(data)

}
