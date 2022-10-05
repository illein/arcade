import type { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>Arcade - About</title>
    </Head>
    <main>
      <div className="content w-full text-center">
        <h1 className="mb-6 text-3xl">About</h1>
        <p>This page explains why</p>
      </div>
    </main>
  </>
);

export default AboutPage;
