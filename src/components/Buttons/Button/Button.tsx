import React from "react";
import "./Button.css";

interface FormSubmitBtn {
  title: string;
}

export const Button: React.FC<FormSubmitBtn> = ({ title }) => {
  return (
    <div className={"form-submit"}>
      <button className={"form-submit-btn btn-fluid"} type="submit">
        {title}
      </button>
    </div>
  );
};
