import marked from "marked";

const createMarkUp = (val) => {
  return { __html: marked(val) };
};

export default createMarkUp;
