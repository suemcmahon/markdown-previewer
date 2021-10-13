import PropTypes from "prop-types";

const Editor = ({ markdown, editMarkdown }) => {
  return (
    <textarea
      id="editor"
      className="editor"
      name="editor"
      rows="5"
      cols="33"
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
