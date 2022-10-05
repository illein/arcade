import { t } from "@/server/trpc/trpc";

export const genreRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.genre.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
      },
    });
  }),
});
