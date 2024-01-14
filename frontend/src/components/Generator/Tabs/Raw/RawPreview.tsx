export interface RawPreviewProps {
  textInput: string;
  onClick: (textInput: string) => void;
}

const RawPreview: React.FC<RawPreviewProps> = ({ textInput, onClick }) => {
  return (
    <div className="w-full min-h-screen bg-primary p-[25px] rounded-2xl">
      <div className="w-full flex items-start justify-between pb-4">
        <div>
          {textInput.split("\n").map((line: string, index: number) => {
            return (
              <p className="text-textGray font-poppins text-xs font-normal">
                {index + 1}. {line}
              </p>
            );
          })}
        </div>

        <div>
          <button
            className="gap-[15.6px] flex items-center justify-between text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg transition-all bg-themeGreen hover:bg-opacity-80"
            onClick={() => onClick(textInput)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default RawPreview;
