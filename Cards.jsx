import React from 'react';
import './Cards.css';
const Cards = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <img src={props.pic} alt="myimage" />
        <h2>{props.roll}</h2>
    </div>
  );
};

export default Cards;