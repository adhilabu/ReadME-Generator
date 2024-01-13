import { useState } from "react";

export interface TemplateSelectorLabelProps {
  label: string;
  onChange?: (value: boolean) => void;
}

const TemplateSelectorLabel: React.FC<TemplateSelectorLabelProps> = ({
  label,
  onChange,
}) => {
  const [minimiseTemplate, setMinimiseTemplate] = useState<boolean>();

  return (
    <>
      {label && (
        <div className="flex items-center justify-between">
          <div>
            <p className="text-textGray font-poppins text-base font-500 my-[10px]">
              {label}
            </p>
          </div>
          <div>
            <button
              className={`text-white px-4 py-3 w-full rounded-lg transition-all hover:bg-opacity-80 ${
                minimiseTemplate ? "bg-themeGreen" : "bg-tertiary"
              }`}
              onClick={() => {
                setMinimiseTemplate(!minimiseTemplate);

                if (onChange) {
                  onChange(!minimiseTemplate);
                }
              }}
            >
              {minimiseTemplate ? "Show" : "Hide"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateSelectorLabel;
