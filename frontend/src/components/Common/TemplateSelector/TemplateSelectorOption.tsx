import React, { useState } from "react";
import { TemplateSelectorOption } from "./TemplateSelector";

const TemplateSelectorOption: React.FC<TemplateSelectorOption> = ({
  description,
  label,
  value,
  onChange,
}) => {
  const [isMinimised, setIsMinimised] = useState<boolean>(true);

  return (
    <div
      className={`text-white px-4 py-3 w-full rounded-lg my-[15px]  ${
        isMinimised ? "bg-tertiary" : "bg-quintary"
      }`}
    >
      <div className="flex items-center justify-start gap-2 m-[10px]">
        <div>
          <button
            className={`text-white px-4 py-3 rounded-lg transition-all hover:bg-opacity-80 ${
              isMinimised ? "bg-themeGreen" : "bg-tertiary"
            }`}
            onClick={() => {
              setIsMinimised(!isMinimised);
            }}
          >
            {isMinimised ? "Show" : "Hide"}
          </button>
        </div>
        <div>
          <h3 className="text-white font-poppins text-sm">| {label}</h3>
        </div>
        <div>
          {/* Add Button */}
          <button
            className="text-white px-4 py-3 rounded-lg transition-all hover:bg-opacity-80 bg-themeGreen"
            onClick={() => {
              if (onChange) {
                onChange(value);
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
      {!isMinimised && (
        <div className="flex items-center justify-start gap-2 m-[10px]">
          <div>
            <h3 className="text-white font-poppins text-sm">{description}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelectorOption;
