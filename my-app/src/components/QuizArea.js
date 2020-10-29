import React from 'react';
import AnswerList from './AnswerList';
import Questions from './Questions';
import UserGreeting from './UserGreeting';



function QuizArea(props) {
    if(props.isFinished){
        return <UserGreeting />
    }
    return (
        <div>
          
           <Questions dataSet={props.dataSet} />
         
           <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} /> 
           </div>
    )
}

export default QuizArea;
