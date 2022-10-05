import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { Background } from "../Background";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Background />
    <Navbar />
    {children}
    <Footer />
  </>
);
