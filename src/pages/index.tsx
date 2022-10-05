import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { GameList } from "@/components/Game";
import { GameModal } from "@/components/Game/GameModal";
import { Search } from "@/components/Search";
import { trpc } from "@/utils/trpc";

const HomePage: NextPage = () => {
  const [gameId, setGameId] = useState<string>();
  const [isSearching, setIsSearching] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = trpc.game.getAll.useQuery(
    {
      text: searchTerm,
    },
    {
      enabled: isSearching,
      keepPreviousData: true,
      onSettled: () => setIsSearching(false),
    },
  );

  return (
    <>
      <Head>
        <title>Arcade</title>
      </Head>
      <main>
        <div className="content flex w-full flex-col">
          <Search
            isSearching={isLoading}
            onClear={() => {
              setSearchTerm("");
              setIsSearching(true);
            }}
            onChange={setSearchTerm}
            onSearch={() => setIsSearching(true)}
            value={searchTerm}
          />
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
