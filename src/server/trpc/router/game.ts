import { z } from "zod";

import { t } from "@/server/trpc/trpc";

export const gameRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.game.findMany();
  }),
});
