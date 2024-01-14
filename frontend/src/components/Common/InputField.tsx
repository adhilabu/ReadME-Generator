import { ChangeEvent, useState } from "react";

export interface InputProps {
  label?: string;
  defaultValue?: string;
  placeHolder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  label,
  defaultValue,
  placeHolder,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );

  return (
    <div className="mb-[30px]">
      {label && (
        <p className="text-textGray font-poppins text-base font-500 my-[10px]">
          {label}
        </p>
      )}

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
    </div>
  );
};

export default InputField;
