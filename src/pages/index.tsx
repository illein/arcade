import type { NextPage } from "next";
import Head from "next/head";

import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { trpc } from "@/utils/trpc";

const HomePage: NextPage = () => {
  const games = trpc.game.getAll.useQuery();
  console.log(games);
  return (
    <>
      <Head>
        <title>Arcade</title>
      </Head>
      <Navbar />
      <main className="h-screen w-screen">
        <Background />
      </main>
    </>
  );
};

export default HomePage;
