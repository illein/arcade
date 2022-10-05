// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/server/db/client";

const games = async (req: NextApiRequest, res: NextApiResponse) => {
  const games = await prisma.game.findMany();
  res.status(200).json(games);
};

export default games;
