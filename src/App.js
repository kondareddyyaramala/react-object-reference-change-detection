import React, { useState } from "react";
import "./style.css";
import FormComponent from './FormComponent';

export default function App() {
  const [validate, setValidate] = useState('false');

  const field = {
    name: 'First Name'
  };


  const onValidateClick = () => {
    const val = () => new Boolean(true);
    setValidate(val());
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FormComponent fieldObj={field} validate={validate}></FormComponent>
      <button onClick={onValidateClick}>Validate</button>
    </div>
  );
}
