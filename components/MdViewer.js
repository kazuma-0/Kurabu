import { marked } from "marked";

function MdViewer(props) {
  return (
    <div
      className="unreset"
      dangerouslySetInnerHTML={{
        __html: `${marked(props.markdown)} <style>${props.css}</style>`,
      }}
    ></div>
  );
}

export default MdViewer;
