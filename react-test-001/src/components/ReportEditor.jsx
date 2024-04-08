import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ markdown }) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

const ReportEditor = () => {
    const [markdownText, setMarkdownText] = useState(`
  # 마크다운 제목

  **Bold 텍스트**
  *Italic 텍스트*
  
  - 리스트 1
  - 리스트 2
  
  [링크 텍스트](https://www.example.com);
  `);

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={markdownText}
        onChange={handleTextChange}
        rows={10}
        style={{ width: '100%' }}
      />
      <MarkdownViewer markdown={markdownText} />
    </div>
  );
};

export default ReportEditor;