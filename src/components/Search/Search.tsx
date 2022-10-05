import debounce from "lodash/debounce";
import Image from "next/future/image";
import { useEffect, useMemo } from "react";

interface ISearchProps {
  value: string;
  isSearching: boolean;
  onClear: () => void;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const Search = ({
  isSearching,
  onClear,
  onChange,
  onSearch,
  value,
}: ISearchProps) => {
  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  const handleDebouncedChange = useMemo(
    () => debounce(onChange, 10),
    [onChange],
  );

  useEffect(() => {
    return () => {
      handleDebouncedChange.cancel();
    };
  }, [handleDebouncedChange]);

  return (
    <div>
      <label className="mb-4 block" htmlFor="search">
        Search
      </label>
      <div className="arcade-edge relative flex max-w-sm">
        <input
          id="search"
          type="text"
          value={value}
          placeholder="Super Mario Bros"
          onKeyDown={handleKeyEvent}
          onChange={(e) => handleDebouncedChange(e.target.value)}
          className="w-full border p-3"
        />
        {value && (
          <button
            disabled={isSearching}
            className="absolute right-20 p-5"
            onClick={onClear}
          >
            <Image src="/close.png" width={10} height={10} alt="Clear" />
          </button>
        )}
        <button
          disabled={isSearching || !value.trim().length}
          className="arcade-btn ml-auto p-3"
          onClick={onSearch}
        >
          Find
        </button>
      </div>
    </div>
  );
};
