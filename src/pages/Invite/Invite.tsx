import React, { useState } from "react";
import { Button } from "../../components/Buttons/Button/Button";
import { TextInput } from "../../components/Inputs/TextInput/TextInput";
import { PhoneInput } from "../../components/Inputs/PhoneInput/PhoneInput";
import { Form } from "../../components/Form/Form";
import "./Invite.css";

interface Invite {
  title: string;
}

export const Invite: React.FC<Invite> = (props) => {
  const [state, setState] = useState<any>({});
  const onChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className={"login"}>
      <div className={"login-content"}>
        <h1>{props.title}</h1>
        <Form onSubmitHandler={() => {}}>
          <TextInput name={"fullName"} label={"Full Name"} type={"text"} onChange={onChangeHendler} value={state.fullName && state.fullName} />
          <PhoneInput name={"mobileNumber"} label={"Mobile Number"} onChange={onChangeHendler} />
          <Button title="Sign Up" />
        </Form>
      </div>
    </div>
  );
};
