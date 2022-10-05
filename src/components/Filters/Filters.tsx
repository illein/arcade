import { useMemo, useState } from "react";

import { trpc } from "@/utils/trpc";

import { Dropdown } from "../Dropdown";

export const Filters = () => {
  return (
    <div className="flex">
      <GenreFilter />
      <PlatformFilter />
    </div>
  );
};

const GenreFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const { data } = trpc.genre.getAll.useQuery();
  const genres = useMemo(
    () => (data ?? []).map((d) => ({ label: d.name, value: d.name })),
    [data],
  );
  return (
    <div className="mr-4 w-60">
      <Dropdown
        defaultOption={{ label: "all", value: "all" }}
        id="genre-dropdown"
        label="Genre"
        options={genres}
        onSelect={(genre) => setSelectedGenre(genre)}
        value={selectedGenre}
      />
    </div>
  );
};

const PlatformFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const { data } = trpc.platform.getAll.useQuery();
  const platforms = useMemo(
    () => (data ?? []).map((d) => ({ label: d.name, value: d.name })),
    [data],
  );
  return (
    <div className="w-72">
      <Dropdown
        defaultOption={{ label: "all", value: "all" }}
        id="genre-dropdown"
        label="Platform"
        options={platforms}
        onSelect={(genre) => setSelectedGenre(genre)}
        value={selectedGenre}
      />
    </div>
  );
};
