import marked from "marked";

marked.setOptions({
  breaks: true,
});

const createMarkUp = (val) => {
  return { __html: marked(val) };
};

export default createMarkUp;
