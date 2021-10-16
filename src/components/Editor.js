import PropTypes from "prop-types";

const Editor = ({ markdown, editMarkdown }) => {
  return (
    <textarea
      id="editor"
      className="editor col-6 p-5 border-0 shadow-lg"
      name="editor"
      onChange={editMarkdown}
      value={markdown}
    ></textarea>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string,
  editMarkdown: PropTypes.func,
};

export default Editor;
