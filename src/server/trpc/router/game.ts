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
    return ctx.prisma.game.findMany({
      select: {
        id: true,
        name: true,
        photoURL: true,
      },
    });
  }),
  getCount: t.procedure.query(({ ctx }) => {
    return ctx.prisma.game.count();
  }),
  getOne: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.game.findUnique({
        where: {
          id: input.id,
        },
        select: {
          format: true,
          id: true,
          genres: {
            select: {
              name: true,
            },
          },
          name: true,
          notes: true,
          owner: {
            select: {
              name: true,
            },
          },
          photoURL: true,
          platform: {
            select: {
              name: true,
              brand: true,
            },
          },
          releaseDate: true,
        },
      });
    }),
});
