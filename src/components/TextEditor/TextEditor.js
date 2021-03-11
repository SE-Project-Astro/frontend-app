import React, { Component } from "react";
import JoditEditor from "jodit-react";

const configJoditEditor = {
  theme: "dark",
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};
const TextEditor = ({ value, onChange }) => {
  return (
    <JoditEditor config={configJoditEditor} value={value} onChange={onChange} />
  );
};

export default TextEditor;
