import Editor from "@monaco-editor/react";

function CSSEditor(props) {
  return (
    // <TabPanel>
    <Editor
      className="h-[70vh]"
      options={{
        minimap: {
          enabled: false,
        },
      }}
      onChange={props.onChange}
      theme="vs-dark"
      defaultLanguage="css"
      keepCurrentModel
      language="markdown"
      value={props.value}
    ></Editor>
    // </TabPanel>
  );
}

export default CSSEditor;
