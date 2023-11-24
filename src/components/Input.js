import React from "react";

export default (props) => (
  <div className="input">
    <hr />
    Hi I'm an Input component with the headline:
    <p>{props.block.headline}</p>
    <input />
  </div>
);
