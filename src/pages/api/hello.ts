import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("access in ", new Date().toLocaleString());

  res.status(200).json({ name: "John Doe", date: new Date().toLocaleString() });
};
