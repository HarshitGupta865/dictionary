import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props){

    return(
    <div className="Meaning">
        <h5 className="partOfSpeech">{props.meaning.partOfSpeech}</h5>
        
        <p className="definition"><strong>Definition:{" "}</strong>{props.meaning.definitions[0].definition}</p>
        <p className="example"><strong>Example:{" "}</strong><em>{props.meaning.definitions[0].example}</em>.</p>
        <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
    );
}