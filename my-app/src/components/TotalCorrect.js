import React from 'react';
import '../App.css';
import Pass from './Pass'

function TotalCorrect(props) {
    return (
        <div>
             
           <h2  className="correct">Correct:{props.correct}</h2> 
           <Pass crct={props.correct} />
        </div>

    )
}

export default TotalCorrect;
