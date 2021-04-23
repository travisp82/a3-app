import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
  <div className='card-list'>{
      props.foodbanks.map(foodbanks => (
        <Card key={foodbanks.name} foodbanks={foodbanks} />
        ))
  }
  </div>
);
