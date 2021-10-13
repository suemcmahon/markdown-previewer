import PropTypes from "prop-types";
import createMarkUp from "../utils/createMarkUp";

const Preview = ({ markdown }) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={createMarkUp(markdown)}></div>
  );
};

Preview.propTypes = {
  markdown: PropTypes.string,
};

export default Preview;
