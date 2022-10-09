import { backendClient } from "../../client";

export default async function handler(req, res) {
  console.log(req.headers.pubKey);
  try {
    const { data } = await backendClient.get(`/auth/user/all`, {
      headers: {
        auth: req.headers.pubkey,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(401).json("User not in club");
  }
}
