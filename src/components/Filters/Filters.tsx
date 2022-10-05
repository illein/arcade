import { useMemo, useState } from "react";

import { trpc } from "@/utils/trpc";

import { Dropdown } from "../Dropdown";

interface IFiltersProps {
  onSelectGenre: (genre: string) => void;
  onSelectPlatform: (platform: string) => void;
  selectedGenre: string;
  selectedPlatform: string;
}

export const Filters = ({
  onSelectGenre,
  onSelectPlatform,
  selectedGenre,
  selectedPlatform,
}: IFiltersProps) => {
  return (
    <div className="flex">
      <GenreFilter selectedGenre={selectedGenre} onSelect={onSelectGenre} />
      <PlatformFilter
        selectedPlatform={selectedPlatform}
        onSelect={onSelectPlatform}
      />
    </div>
  );
};

interface IGenreFilterProps {
  onSelect: (genre: string) => void;
  selectedGenre: string;
}

const GenreFilter = ({ onSelect, selectedGenre }: IGenreFilterProps) => {
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
        onSelect={(genre) => onSelect(genre)}
        value={selectedGenre}
      />
    </div>
  );
};

interface IPlatformFilterProps {
  onSelect: (platform: string) => void;
  selectedPlatform: string;
}

const PlatformFilter = ({
  onSelect,
  selectedPlatform,
}: IPlatformFilterProps) => {
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
        onSelect={(platform) => onSelect(platform)}
        value={selectedPlatform}
      />
    </div>
  );
};
