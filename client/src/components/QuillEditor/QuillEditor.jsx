import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import "./QuillEditor.css";

const QuillEditor = (props) => {  
  const [editorHtml, setEditorHtml] = useState("<p>&nbsp;</p>");
  const {value, placeholder,onEditorChange} = props;
  
  const handleChange = (html) => {
    // console.log('html', html);
    setEditorHtml(html);
    onEditorChange(html);
};

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block", "image"],
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      // [{ 'direction': 'rtl' }],
      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], // remove formatting button
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "font",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    // "size",
    "script",
  ];
  return (
    <ReactQuill
      theme="snow"
      value={value || editorHtml}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      // placeholder={placeholder}
    />
  );
};

export default QuillEditor;
