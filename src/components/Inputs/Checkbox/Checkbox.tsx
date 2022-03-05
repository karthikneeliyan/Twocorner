import React from "react";
import "./Checkbox.css";

interface Checkbox {
  name: string;
  type: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: React.FC<Checkbox> = ({ name, type, onChange, value }) => {
  return (
    <div className={"form-checkbox"}>
      <input onChange={onChange} value={value} className={"form-checkbox-input"} id={name} type={type} />
      <label className="text-muted" htmlFor={name}>
        Agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
      </label>
    </div>
  );
};
