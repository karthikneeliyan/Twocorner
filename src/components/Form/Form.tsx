import React from "react";
import "./Form.css";

interface Form {
  onSubmitHandler: Function;
  children: any;
}
export const Form: React.FC<Form> = ({ onSubmitHandler, children }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(e);
  };
  return (
    <form onSubmit={onSubmit} className={"form"}>
      {children}
    </form>
  );
};
