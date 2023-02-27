import { NextApiRequest, NextApiResponse } from "next";
import questoes from '../bancoDeQuestoes';

export default function Questoes(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(questoes[0].paraObjeto());
};
