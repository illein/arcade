import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { GameList } from "@/components/Game";
import { GameModal } from "@/components/Game/GameModal";
import { trpc } from "@/utils/trpc";

const HomePage: NextPage = () => {
  const { data, isLoading } = trpc.game.getAll.useQuery();
  const [gameId, setGameId] = useState<string>();
  return (
    <>
      <Head>
        <title>Arcade</title>
      </Head>
      <main>
        <div className="content w-full">
          <GameList
            games={data}
            isLoading={isLoading}
            onSelect={(id) => setGameId(id)}
          />
        </div>
      </main>
      {gameId && (
        <GameModal gameId={gameId} onClose={() => setGameId(undefined)} />
      )}
    </>
  );
};

export default HomePage;
