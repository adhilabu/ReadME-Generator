import { useState } from "react";
import TemplateSelectorLabel from "./TemplateSelectorLabel";
import TemplateSelectorOption from "./TemplateSelectorOption";

export interface TemplateSelectorProps {
  label: string;

  options: TemplateSelectorOption[];
}

export interface TemplateSelectorOption {
  value: string;
  label: string;
  description: string;
  onChange?: (value: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  label,
  options,
}) => {
  const [isMinimised, setIsMinimised] = useState<boolean>(false);

  return (
    //       className="bg-tertiary text-white px-4 py-3 w-full rounded-lg"

    <div className="mb-[30px]">
      <TemplateSelectorLabel
        label={label}
        onChange={(e) => setIsMinimised(e)}
      />

      {!isMinimised &&
        options?.map((option: TemplateSelectorOption, index: number) => (
          <TemplateSelectorOption
            key={index}
            value={option.value}
            label={option.label}
            description={option.description}
            onChange={(value: string) => {
              alert(value);
            }}
          />
        ))}
    </div>
  );
};

export default TemplateSelector;
