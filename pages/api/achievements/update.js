// post request is used to prevent other people from just accessing this information by logging in.
import { backendClient } from "../../../client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json("Method not allowed");
    return;
  }
  try {
    console.log(req.body);
    const { data } = await backendClient.put(
      "/achievement/update",
      {
        ...req.body,
      },
      {
        headers: {
          auth: req.body.pubKey,
        },
      }
    );
    res.status(200).json(data);
  } catch (e) {
    res.status(401).json("User not in club");
  }
}
