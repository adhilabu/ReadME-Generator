import { ChangeEvent, useState } from "react";

export interface DropdownProps {
  defaultValue?: string;
  placeHolder?: string;
  options: DropdownOption[];
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export interface DropdownOption {
  value: string;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  defaultValue,
  placeHolder,
  options,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );

  return (
    <select
      className="bg-tertiary text-white px-4 py-3 w-full rounded-lg"
      value={selectedValue}
      onChange={(e) => {
        setSelectedValue(e.target.value);

        if (onChange) {
          onChange(e);
        }

        e.preventDefault();
      }}
    >
      {placeHolder && (
        <option value="" disabled hidden>
          {placeHolder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
