import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <h2><u>{props.foodbanks.name}</u></h2>
    <img alt="foodbanks" src={`https://robohash.org/${props.foodbanks.name}?set=set5&$size=180x180`} />

    <p> {props.foodbanks.address}, {props.foodbanks.country} <p>e: {props.foodbanks.email}</p><p>p: {props.foodbanks.phone}</p> </p>


  </div>
);
