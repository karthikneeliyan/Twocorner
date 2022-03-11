import React, { useState } from "react";
import { Button } from "../../components/Buttons/Button/Button";
import { TextInput } from "../../components/Inputs/TextInput/TextInput";
import { PhoneInput } from "../../components/Inputs/PhoneInput/PhoneInput";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Form } from "../../components/Form/Form";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { SIGN_UP_URL } from "../../static-data";
import { v4 as uuidv4 } from 'uuid';
interface Signup {
  title: string;
  handleLoggedIn:any;
}

export const Signup: React.FC<Signup> = (props) => {
  const [name, setName] = useState<any>(undefined);
  const [dob, setDob] = useState<any>(undefined);
  const [country, setCountry] = useState<any>(undefined);
  const [mobile, setMobile] = useState<any>(undefined);



  const navigate = useNavigate();

  const handleSignUp=()=>{

    const body={
      "firstName": name,
      "publicAddress": uuidv4(),
      "profile": {
          "mobileNo": uuidv4(),
          "countryCode": "+91"
      }
  }
  try{
    const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body:JSON.stringify(body)}
    fetch(SIGN_UP_URL,requestOptions).then(function(response) {                      // first then()
      if(response.ok)
      {
        return response.json();         
      }
    
      if(response.status!=200){

      }
    }).then((token)=>{
      props.handleLoggedIn({accessToken:token?.token})
    }).catch(err=>{
      console.log(err)
    
    })
  }catch(e){
    console.log(e)
  }
    navigate("/invite")
  }
  return (
    <div className={"login"}>
      <div className={"login-content"}>
        <h1>{props.title}</h1>
        <Form onSubmitHandler={() => {}}>
          <TextInput key={"fullname"} name={"fullName"} label={"Full Name"} type={"text"} onChange={e => setName(e.target.value)} value={name} />
          {/* <TextInput  key={"dob"} name={"dob"} label={"Dob"} type={"text"} onChange={e => setDob(e.target.value)} value={dob} /> */}
          {/* <PhoneInput  key={"mobile"}  name={"mobileNumber"} label={"Mobile Number"} onChange={e => setMobile(e.target.value)} /> */}
          {/* <Checkbox  key={"check"} name={"terms"} type={"checkbox"} onChange={e => setDate(e.target.value)} value={state.terms && state.terms} /> */}
          <Button onClick={handleSignUp}title="Sign Up" />
        </Form>
      </div>
    </div>
  );
};
