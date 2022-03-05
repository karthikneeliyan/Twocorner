import React from "react";
import "./TextInput.css";

interface TextInput {
  name: string;
  label: string;
  type: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const TextInput: React.FC<TextInput> = ({ name, label, type, onChange, value }) => {
  return (
    <div className={"form-input"}>
      <label className={"form-label"} htmlFor={name}>
        {label}
      </label>
      <input onChange={onChange} value={value} className={"form-control"} id={name} type={type} />
    </div>
  );
};
