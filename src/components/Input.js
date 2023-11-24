import React, { useState } from "react";


export default function Form(props) {
  const [firstInput, setFirstInput] = useState('');

  return (
    <div className="input">
      <hr />
      Hi I'm an Input component with the headline:
      <p>{props.block.headline} <input 
        value={firstInput}
        onChange={e => setFirstInput(e.target.value)}
      /></p>
      {firstInput}
    </div>
  )
}