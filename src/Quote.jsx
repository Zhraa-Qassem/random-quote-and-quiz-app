import './App.css';
import { React, useState } from 'react';

export default function Quize() {

const quotes = ['BAZINGA', "i'm batman","i'v got a jar of dirt","i'm with you till the end of the line","hulk smash",]


    let [quote, setQuote] = useState(quotes[0])
    // let [random, setRandom] = useState()
    const HandleClick = ()=>{
        setQuote(quotes[(Math.floor(Math.random() * quotes.length))])
    }

    return (
        <div className="header">
            <h1>Random Quote Genertor </h1>
<div>
   <h2 className='quote'>{quote}</h2>
   
</div>
<button className='btn' onClick={HandleClick}>Generate Random Quote</button>
        </div>
    );
}

