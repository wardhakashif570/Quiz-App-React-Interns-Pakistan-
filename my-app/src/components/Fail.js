import React from "react";

function Fail(props) {
  let Fail;
  let result;
  if (props.incrt >= 2) {
    result = "You Failed";
    Fail = true;
  }

  return (
    
      <span className={`result ${Fail && "fail"}`}>{result}</span>
    
  );
}

export default Fail;
