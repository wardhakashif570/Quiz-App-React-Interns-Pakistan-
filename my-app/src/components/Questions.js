import React from 'react';
import '../App.css';


function Questions(props) {
    return (
    <h1 className="questions">{props.dataSet.question}</h1>
    );
}

export default Questions;
