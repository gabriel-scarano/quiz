import { NextApiRequest, NextApiResponse } from "next";

export default function Questoes(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send({
    id: req.query.id,
    name: "Pedro #02",
  });
};
