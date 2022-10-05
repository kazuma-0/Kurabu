import Editor from '@monaco-editor/react';
function HtmlEditor(props) {
    return (
        // <TabPanel>
        <Editor
            className='h-[70vh]'
            options={{
                minimap: {
                    enabled: false,
                },
            }}
            onChange={props.onChange}
            theme='vs-dark'
            defaultLanguage='markdown'
            keepCurrentModel
            language='markdown'
            value={props.value}
        ></Editor>
        // </TabPanel>
    );
}

export default HtmlEditor;