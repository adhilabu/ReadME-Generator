import { useState } from "react";

export interface IBlockProps {
  title: string;
  description: string;
  function: string;
  variables: {
    label: string;
    name: string;
    defaultValue: string | boolean | string[];
    type: "text" | "boolean" | "array";
  }[];
}

const Block: React.FC<IBlockProps> = ({ title, description }) => {
  const [expandBlock, setExpandBlock] = useState<boolean>(false);

  return (
    <div className="w-full bg-primary rounded-2xl p-[25px] mb-[15px]">
      <div className="flex items-end justify-between pb-4 mb-4 border-b-[1px] border-white">
        <div>
          <h1 className="text-white font-poppins text-base font-bold">
            {title}
          </h1>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => {
              alert("Up");
            }}
          >
            <img
              src="/icons/up-button.svg"
              alt="Up Button"
              className="h-[32px] w-[32px] mr-4 hover:opacity-80"
            />
          </button>

          <button
            onClick={() => {
              alert("Down");
            }}
          >
            <img
              src="/icons/down-button.svg"
              alt="Up Button"
              className="h-[32px] w-[32px] mr-4 hover:opacity-80"
            />
          </button>

          <button
            onClick={() => {
              alert("Refresh");
            }}
          >
            <img
              src="/icons/refresh-button.svg"
              alt="Up Button"
              className="h-[32px] w-[32px] mr-4 hover:opacity-80"
            />
          </button>

          <button
            onClick={() => {
              alert("Delete");
            }}
          >
            <img
              src="/icons/delete-button.svg"
              alt="Up Button"
              className="h-[32px] w-[32px] mr-4 hover:opacity-80"
            />
          </button>
        </div>
      </div>

      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-white font-poppins text-xs font-500">
            {description}
          </h2>
        </div>

        <button
          onClick={() => {
            setExpandBlock(!expandBlock);
          }}
        >
          <img
            src="/icons/collapse-button.svg"
            alt="Up Button"
            className={`h-[24px] w-[24px] hover:opacity-80 transition-all ${
              expandBlock ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="w-full bg-tertiary rounded-2xl p-4">
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Block;
