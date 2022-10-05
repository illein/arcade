import { inferProcedureOutput } from "@trpc/server";
import Image from "next/future/image";

import { AppRouter } from "@/server/trpc/router";

import { SkeletonGrid } from "../SkeletonGrid";

interface IGameListProps {
  games: inferProcedureOutput<AppRouter["game"]["getAll"]> | undefined;
  isLoading: boolean;
  onSelect: (id: string) => void;
}

export const GameList = ({ games, isLoading, onSelect }: IGameListProps) => {
  if (!games || isLoading) return <SkeletonGrid />;
  return (
    <div className="grid grid-cols-4 gap-4">
      {games.map((game) => (
        <article
          key={game.id}
          className="arcade-card arcade-card-hover bg-white text-black"
        >
          <button
            className="flex h-full w-full flex-col items-center p-6"
            onClick={() => onSelect(game.id)}
          >
            <Image alt={game.name} src={game.photoURL} width={50} height={50} />
            <div className="my-6 capitalize">{game.name}</div>
            <div className="arcade-btn mt-auto w-full p-3">Read more</div>
          </button>
        </article>
      ))}
    </div>
  );
};
