import PropTypes from "prop-types";

const Preview = ({ markdown }) => {
  return <div id="preview">{markdown}</div>;
};

Preview.propTypes = {
  markdown: PropTypes.string,
};

export default Preview;
