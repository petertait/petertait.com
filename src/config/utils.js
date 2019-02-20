import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

export { markdownify };

function markdownify(text) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(text)
    .toString();
}
