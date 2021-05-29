import React from 'react';

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="blank" className="audio-btn">
          🔊
        </a>{' '}
        <span className="pronunciation" style={{ color: '#3c70a8' }}>
          {' [ '}
          {props.phonetics.text}
          {' ] '}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
