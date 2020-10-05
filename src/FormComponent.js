import React, { useState, useEffect } from 'react';

const FormComponent = ({ validate, fieldObj }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('a name was subbed: ' + value);
    event.preventDefault();
  }

  useEffect(() => {
    console.log('Validating app::  ', validate.toString() , Math.random());
    // if (validate) {
    //   console.log('Validating app::  ', validate);
    // } else {
    //   console.log('Validating app::  resetting the flag :: ', validate);
    // }

  }, [validate])

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        {fieldObj.name}
        <input type="text" value={value} onChange={e => handleChange(e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}

export default FormComponent;

