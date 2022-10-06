import { backendClient } from "../../client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json("Method not allowed");
    return;
  }
  try {
    const { data, status } = await backendClient.post("/invite/validate", {
      code: req.body.code,
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(401).json("Invalid code");
  }
}
