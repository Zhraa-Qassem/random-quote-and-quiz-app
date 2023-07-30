import './App.css';
import { React, useState } from 'react';

export default function Quize() {
    const options = [
        {
            ans: 'he lost his semicolons',
            assis: false
        },
        {
            ans: 'he got tired of bugs and errors',
            assis: true
        },
        {
            ans: 'he wanted to switch to java',
            assis: false
        },
    ];



    // function ClickHandle(option){
    // if (option.assis) {
    //     console.log('is true')

    // }
    // else{console.log('is false')}
    // }

    const [ansState, setAnsState] = useState()


    return (
        <div className="list">
            <h1>QUIZAPP</h1>
            <h3>why did the Javascript developer quit his job </h3>
            <div>

                {options.map((option, i) => (

                    <button key={i} className='btn' onClick={() => setAnsState(option.assis)}>
                        {option.ans}
                        <div style={
                            {
                                backgroundColor: 'green'
                            }
                        }>
                            {
                                ansState && ansState == option.assis ? 'correct' : ''
                            }
                        </div>
                    </button>



                ))}

            </div>
        </div>
    );
}

// id={option.assis === true ? 'right' : 'false'// var id = ''

// function ClickHandle(){
//     options.map((option) => (
//                      if(option.assis ===true){
//                     id = 'right'
//                      }
//                      else{
//                         id ='wrong'
//                      }
//     ))
// }


// onClick={()=>ClickHandle(option)}>
//                             {option.ans} {
//                                 option.assis ? "coreeeeeeeeeeeeeeeeeeeect" : ""