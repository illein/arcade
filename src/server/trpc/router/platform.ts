import { t } from "@/server/trpc/trpc";

export const platformRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.platform.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        brand: true,
      },
    });
  }),
});
