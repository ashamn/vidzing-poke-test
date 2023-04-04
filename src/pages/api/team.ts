import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  if (body.length) res.status(200).json({ msg: "success" });
  else res.status(500);
}
