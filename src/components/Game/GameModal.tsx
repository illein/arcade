import { inferProcedureOutput } from "@trpc/server";
import * as df from "date-fns";
import Image from "next/future/image";

import { AppRouter } from "@/server/trpc/router";
import { trpc } from "@/utils/trpc";

import { Loader } from "../Loader";

type Game = inferProcedureOutput<AppRouter["game"]["getOne"]>;

interface IGameModalProps {
  gameId: string;
  onClose: () => void;
}

export const GameModal = ({ gameId, onClose }: IGameModalProps) => {
  const { data, isLoading } = trpc.game.getOne.useQuery({ id: gameId });
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex h-full w-full items-center justify-center px-[10%]">
      <div
        className="cursor-click absolute z-0 h-full w-full backdrop-blur"
        onClick={onClose}
      />
      {!data || isLoading ? <Loader /> : <Game game={data} onClose={onClose} />}
    </div>
  );
};

interface IGameProps {
  game: NonNullable<Game>;
  onClose: () => void;
}

const Game = ({ game, onClose }: IGameProps) => {
  return (
    <article className="arcade-card relative z-10 flex w-full items-center bg-white p-8">
      <button
        className="cursor-click absolute top-10 right-10"
        onClick={onClose}
      >
        <Image src="/close.png" width={30} height={30} alt="Close" />
      </button>
      <aside className="relative w-2/4">
        <Image
          alt={game.name}
          className="h-[auto] w-full object-contain"
          fill
          src={game.photoURL}
          sizes="100vw"
        />
      </aside>
      <section>
        <div className="mb-6">
          <h1 className="text-2xl">{game.name}</h1>
        </div>
        <div className="mb-3 table">
          <span className="table-cell w-36 text-gray-500">Released:</span>
          <span className="table-cell">
            {game.releaseDate
              ? df.format(new Date(game.releaseDate), "dd/MM/yyyy")
              : "N/A"}
          </span>
        </div>
        <div className="mb-3 table">
          <span className="table-cell w-36 text-gray-500">Platform:</span>
          <span className="table-cell">
            {game.platform?.name && game.platform?.brand
              ? `${game.platform.brand} ${game.platform.name}`
              : "N/A"}
          </span>
        </div>
        <div className="mb-3 table">
          <span className="table-cell w-36 text-gray-500">Format:</span>
          <span className="table-cell">{game.format}</span>
        </div>
        <div className="mb-3 table">
          <span className="table-cell w-36 text-gray-500">Owner:</span>
          <span className="table-cell">{game.owner?.name ?? "N/A"}</span>
        </div>

        <div className="table">
          <div className="table-cell w-36 text-gray-500">Genres:</div>
          <div className="table-cell">
            {game.genres.map((g) => g.name).join(", ")}
          </div>
        </div>

        {game.notes && (
          <div>
            <p>Notes</p>
            {game.notes}
          </div>
        )}
      </section>
    </article>
  );
};
