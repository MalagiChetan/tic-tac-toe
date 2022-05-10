import React from "react";
import { useState } from "react";
import "../App.css";

function Square(props) {
  let [clicked, setClicked] = useState(0);
  const handleClick = () => {
    console.log(clicked);
    if (clicked === 0) {
      props.onClick();
      setClicked((clicked += 1));
    } else {
      setClicked = 0;
    }
  };
  const classes = props.className ? `${props.className} square` : "square";
  return (
    <>
      <span className={classes} onClick={handleClick}>
        {props.game}
      </span>
    </>
  );
}

export default Square;
