import React from 'react';
import './editor.css';

const CustomTextEditor = () => {
  const handleSave = () => {
    // Implement save functionality
  };

  const handleVariableInsert = () => {
    // Implement variable insert functionality
  };

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <button onClick={handleSave}>SAVE</button>
        <button onClick={handleVariableInsert}>Variables</button>
      </div>
      <textarea className="editor-textarea"></textarea>
    </div>
  );
};

export default CustomTextEditor;
