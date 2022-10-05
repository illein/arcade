import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "@/components/Logo";

export const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <header>
      <nav className="flex items-center justify-between px-20">
        <div className="max-w-[3rem]">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <ul className="flex">
          <li>
            <Link href="/">
              <a
                className={clsx(
                  "block py-10 px-3",
                  pathname === "/" && "text-fuchsia-500",
                )}
              >
                Games
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={clsx(
                  "block py-10 px-3",
                  pathname === "/about" && "text-fuchsia-500",
                )}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
