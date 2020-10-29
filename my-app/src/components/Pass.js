import React from "react";

function Pass(props) {
  let Pass;
  let result;
  if (props.crct >= 2) {
    result = "You Passed";
    Pass = true;
  } 

  return (
    
      <span className={`result ${Pass && "pass"}`}>{result}</span>
    
  );
}

export default Pass;
