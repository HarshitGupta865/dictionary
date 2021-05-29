import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props){
    console.log(props.results);
    if (props.results){
          return(
    <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic, index){
                return(
                <div key={index}>
                    <Phonetics phonetics={phonetic} />
                </div>
                );
            })}
        <ul>
            {props.results.meanings.map(function(meaning, index){
            return (
                <div key={index}>
                    <li className="wrapper" id="results">
                        <Meaning meaning={meaning}/>
                    </li>
                </div>
                );
        })}
        </ul>
    </div>
    );
    }else{
        return(null)
    }
}