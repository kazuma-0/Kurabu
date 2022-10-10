import { backendClient } from "../../../client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json("Method not allowed");
    return;
  }
  try {
    const { data } = await backendClient.post(
      `/invite/new/${req.body.count}`,
      {},
      {
        headers: {
          auth: req.body.auth,
        },
      }
    );
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(406).json(e.response.data);
  }
}
