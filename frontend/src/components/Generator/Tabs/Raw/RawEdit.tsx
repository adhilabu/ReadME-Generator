import MarkdownEditor from "@uiw/react-markdown-editor";

export interface RawEditProps {
  output: string;
  onClick: (textInput: string) => void;
}

const RawEdit: React.FC<RawEditProps> = ({ output, onClick }) => {
  return (
    <div>
      <div className="w-full flex justify-start items-start mb-4">
        <button
          className="gap-[15.6px] flex items-center justify-between text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg transition-all bg-themeGreen hover:bg-opacity-80"
          onClick={() => onClick(output)}
        >
          Copy
        </button>
      </div>

      <MarkdownEditor value={output} />
    </div>
  );
};

export default RawEdit;
