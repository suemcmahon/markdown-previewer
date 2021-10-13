import marked from "marked";

const createMarkUp = (val) => {
  return { __html: marked(val, { sanitize: true }) };
};

export default createMarkUp;
