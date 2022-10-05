// src/pages/_app.tsx
import "@/styles/globals.css";

import type { AppType } from "next/app";

import { Layout } from "@/components/Layout";
import { trpc } from "@/utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default trpc.withTRPC(MyApp);
