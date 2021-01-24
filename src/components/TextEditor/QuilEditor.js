import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuilEditor = ({ value, onChange }) => {
  //const [value, setValue] = useState("");

  return (
    <ReactQuill
      placeholder="type here...."
      theme="snow"
      value={value}
      onChange={onChange}
    />
  );
};

export default QuilEditor;
