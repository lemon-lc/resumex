import React from 'react';

import { convertToRaw, Editor, EditorState, RichUtils } from 'draft-js';

import './editor.less';

function MyEditor() {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const _onStyleClick = (type: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, type));
  };

  const handleGetContent = () => {
    console.log(editorState.getCurrentContent());
    console.log(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div className="resumes-editor">
      <ul className="resumes-editor-header">
        <li className="resumes-editor-header-item" onClick={() => _onStyleClick('BOLD')}>
          B
        </li>
        <li className="resumes-editor-header-item" onClick={() => _onStyleClick('ITALIC')}>
          I
        </li>
        <li className="resumes-editor-header-item" onClick={() => _onStyleClick('UNDERLINE')}>
          U
        </li>
      </ul>
      <button onClick={handleGetContent}>content</button>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
}

export default MyEditor;
