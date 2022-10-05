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
  if (!isLoading && !games?.length) {
    return (
      <div className="m-auto flex max-w-md flex-col text-center">
        <div className="relative m-auto mb-4 h-20 w-20">
          <Image src="/sad-invader.png" alt="sad invader" fill />
        </div>
        <p>Oh, bugger, looks like that game is not in the collection yet!</p>
      </div>
    );
  }

  if (isLoading && !games) {
    return <SkeletonGrid />;
  }

  return (
    <div className="mt-8 grid grid-cols-4 gap-4">
      {games?.map((game) => (
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
