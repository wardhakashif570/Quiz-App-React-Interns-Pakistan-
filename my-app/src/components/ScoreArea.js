import React from 'react';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';
import '../App.css';

function ScoreArea(props) {
    return (
        <div className="scorewrapper">
            <h2>Score Area</h2>
            <TotalCorrect correct={props.correct} crct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect} incrt={props.incorrect}/>
            
        </div>
    )
}
 
export default ScoreArea;
