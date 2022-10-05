// src/server/router/index.ts
import { t } from "@/server/trpc/trpc";

import { gameRouter } from "./game";
import { genreRouter } from "./genre";
import { platformRouter } from "./platform";

export const appRouter = t.router({
  game: gameRouter,
  genre: genreRouter,
  platform: platformRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
