import React from 'react';
import './Glassbox.css';

const GlassBox = ({upperText,bottomText}) =>{
  return (
    <div className="Glassbox">
        <h6>{upperText}</h6>
        <h1>{bottomText}</h1>
    </div>
  );
};

export default GlassBox;
