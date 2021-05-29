import React from "react";

import "./Synonyms.css";

export default function Synonyms(props){
    console.log(props.synonyms)
    if (props.synonyms){
        return(
        <div className="Synonyms">
            <strong>Synonyms:</strong>{" "}
            <div className="synonymList">
            <ul>
            {props.synonyms.map(function(synonym, index){
                return(
                    <li key={index}>
                    {" "}{synonym}
                    </li>
                )
            })}
            </ul>
            </div>
        </div>
    );
    } else{
        return null;
    }
}