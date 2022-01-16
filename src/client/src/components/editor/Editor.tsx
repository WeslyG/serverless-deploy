import Editor from '@monaco-editor/react';
import React from 'react';

export const CodeEditor = ({ name, code, language, onChangeEditor }) => {
  return (
    <>
      <h3 style={{ marginLeft: '2em' }}>{name}</h3>
      <Editor height="54em" language={language} value={code} onChange={onChangeEditor} />
    </>
  );
};
