import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const MarkdownPreviewer = () => {
  const placeholder = "#heading";

  const [content, setContent] = useState(placeholder);

  return (
    <div className="markdown-previewer">
      <Editor
        markdown={content}
        editMarkdown={(e) => setContent(e.target.value)}
      />
      <Preview markdown={content} />
    </div>
  );
};

export default MarkdownPreviewer;
