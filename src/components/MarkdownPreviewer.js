import Editor from "./Editor";
import Preview from "./Preview";

const MarkdownPreviewer = () => {
  const placeholder = "#heading";

  return (
    <div className="markdown-previewer">
      <Editor markdown={placeholder} />
      <Preview markdown={placeholder} />
    </div>
  );
};

export default MarkdownPreviewer;
