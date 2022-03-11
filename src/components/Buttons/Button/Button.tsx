import React from "react";
import "./Button.css";

interface FormSubmitBtn {
  title: string;
  onClick:any;
}

export const Button: React.FC<FormSubmitBtn> = ({ title ,onClick}) => {
  return (
    <div className={"form-submit"}>
      <button className={"form-submit-btn btn-fluid"} onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
};
