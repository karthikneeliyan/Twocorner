import React, { useState } from "react";
import { Button } from "../../components/Buttons/Button/Button";
import { TextInput } from "../../components/Inputs/TextInput/TextInput";
import { PhoneInput } from "../../components/Inputs/PhoneInput/PhoneInput";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Form } from "../../components/Form/Form";
import "./Signup.css";

interface Signup {
  title: string;
}

export const Signup: React.FC<Signup> = (props) => {
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
          <TextInput name={"dob"} label={"Dob"} type={"text"} onChange={onChangeHendler} value={state.dob && state.dob} />
          <PhoneInput name={"mobileNumber"} label={"Mobile Number"} onChange={onChangeHendler} />
          <Checkbox name={"terms"} type={"checkbox"} onChange={onChangeHendler} value={state.terms && state.terms} />
          <Button title="Sign Up" />
        </Form>
      </div>
    </div>
  );
};
