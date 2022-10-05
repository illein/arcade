import type { NextPage } from "next";
import Head from "next/head";

import { trpc } from "@/utils/trpc";

const HomePage: NextPage = () => {
  const games = trpc.game.getAll.useQuery();
  console.log(games);
  return (
    <>
      <Head>
        <title>Arcade</title>
      </Head>
      <main></main>
    </>
  );
};

export default HomePage;
