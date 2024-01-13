import { ChangeEvent, useState } from "react";

export interface InputProps {
  defaultValue?: string;
  placeHolder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  defaultValue,
  placeHolder,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );

  return (
    <input
      type="text"
      className="bg-tertiary text-white px-4 py-3 w-full rounded-lg"
      placeholder={placeHolder}
      value={selectedValue}
      onChange={(e) => {
        setSelectedValue(e.target.value);

        if (onChange) {
          onChange(e);
        }

        e.preventDefault();
      }}
    />
  );
};

export default InputField;
