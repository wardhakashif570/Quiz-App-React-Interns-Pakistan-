import React from 'react';
import '../App.css';
import Fail from './Fail'

function TotalIncorrect(props) {
    return (
        <div>
         
          <h2 className="Incorrect">Incorrect: {props.incorrect}</h2>  
          <Fail incrt={props.incorrect} />
        </div>
    )
}

export default TotalIncorrect;
