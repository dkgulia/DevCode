import React from 'react';

export default function CodeEditor() {
  return (
    <textarea
      className="code-editor-area"
      placeholder="Write your code here..."
      rows={15}
      style={{
        width: '100%',
        padding: '0.5rem',
        fontFamily: 'monospace',
        fontSize: '1rem',
      }}
    />
  );
}
