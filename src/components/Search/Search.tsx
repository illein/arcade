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
    <div className="arcade-edge relative flex max-w-md">
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyEvent}
        onChange={(e) => handleDebouncedChange(e.target.value)}
        className="w-full border p-3"
      />
      {value && (
        <button
          disabled={isSearching}
          className="absolute right-28 p-5"
          onClick={onClear}
        >
          <Image src="/close.png" width={10} height={10} alt="Clear" />
        </button>
      )}
      <button
        disabled={isSearching}
        className="arcade-btn ml-auto p-3"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};
