import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const MarkdownPreviewer = () => {
  const defaultText = "# heading";

  const [content, setContent] = useState(defaultText);

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
