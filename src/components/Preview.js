import PropTypes from "prop-types";
import createMarkUp from "../utils/createMarkUp";

const Preview = ({ markdown }) => {
  return (
    <div
      id="preview"
      className="col-6 p-5 preview"
      dangerouslySetInnerHTML={createMarkUp(markdown)}
    ></div>
  );
};

Preview.propTypes = {
  markdown: PropTypes.string,
};

export default Preview;
