import { clsx } from "clsx";
import { useState } from "react";

export interface IDropdownOption {
  label: string;
  value: string;
}

interface IDropdownProps {
  defaultOption?: IDropdownOption;
  id: string;
  isDisabled?: boolean;
  label: string;
  onSelect: (value: string) => void;
  options: IDropdownOption[];
  value: string;
}

export const Dropdown = ({
  defaultOption,
  id,
  isDisabled,
  label,
  onSelect,
  options,
  value,
}: IDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDropdownToggle = () => setIsVisible(!isVisible);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsVisible(false);
  };

  return (
    <div className="relative w-full">
      <label className="mb-4 block" htmlFor={id}>
        {label}
      </label>
      <button
        className="arcade-cursor arcade-edge flex w-full justify-between p-4"
        disabled={isDisabled}
        onClick={handleDropdownToggle}
        type="button"
      >
        <span className="block text-left">{value}</span>
        <i
          className={clsx(
            "arcade-icon arcade-cursor ml-4 inline-block h-2 w-2 p-2",
            isVisible ? "arcade-icon-angle-up" : "arcade-icon-angle-down",
          )}
        />
      </button>
      <ul
        className={clsx(
          "arcade-edge absolute inset-x-0 top-[calc(100px-0px)] z-50 max-h-64 overflow-y-auto bg-white",
          isVisible ? "block" : "hidden",
        )}
      >
        {defaultOption && (
          <li className="border-b-2 border-solid border-black hover:bg-slate-200">
            <button
              className="arcade-cursor w-full p-4 text-left"
              disabled={isDisabled}
              onClick={() => handleSelect(defaultOption.value)}
              type="button"
            >
              {defaultOption.label}
            </button>
          </li>
        )}
        {options.map((option) => (
          <li
            className="border-b-2 border-solid border-black hover:bg-slate-200"
            key={option.value}
          >
            <button
              className="arcade-cursor w-full p-4 text-left"
              disabled={isDisabled}
              onClick={() => handleSelect(option.value)}
              type="button"
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
