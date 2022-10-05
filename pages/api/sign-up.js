import {backendClient} from "../../client";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(401).json("Method not allowed")
        return;
    }
    console.log(req.body);
    const {name, department, branch, roll_number, pubKey, email, role} = req.body;
    try{
        const {data} = await backendClient.post("/auth/new", {
            name, department, branch, roll_number, pubKey, email, role
        })
        console.log(data);
        res.status(200).json(data);
    }
    catch (e){
        console.log(e.response.data)
        res.status(406).json(e.response.data)
    }
}
