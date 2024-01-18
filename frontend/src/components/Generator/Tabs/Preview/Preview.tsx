import MarkdownEditor from "@uiw/react-markdown-editor";
import React from "react";

interface IPreviewProps {
  output: string;
}

const Preview: React.FC<IPreviewProps> = ({ output }) => {
  return <MarkdownEditor.Markdown source={output} />;
};

export default Preview;
