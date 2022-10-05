import { trpc } from "@/utils/trpc";

export const Footer = () => {
  const { data, isLoading } = trpc.game.getCount.useQuery();
  return (
    <footer className="flex justify-between px-20 py-10">
      <div>
        {new Date().getFullYear()} |{" "}
        <a
          className="text-fuchsia-500 hover:text-fuchsia-400"
          href="https://github.com/illein"
          rel="noopener noreferrer"
          target="_blank"
        >
          @illein
        </a>
      </div>
      <div>
        <span className="text-sky-500">{isLoading ? 0 : data}</span> games in
        collection
      </div>
    </footer>
  );
};
