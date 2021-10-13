import PropTypes from "prop-types";

const Editor = ({ markdown }) => {
  return (
    <textarea
      id="editor"
      className="editor"
      name="editor"
      rows="5"
      cols="33"
      defaultValue={markdown}
    ></textarea>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string,
};

export default Editor;
