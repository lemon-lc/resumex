import React from 'react';

import { Editor, EditorState } from 'draft-js';

import './editor.less';

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <div className="resumes-editor">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default MyEditor;
