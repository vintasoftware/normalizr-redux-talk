import React, {Fragment} from 'react';
import MealCard from "./MealCard";

const MealShowcase = ({meals, title}) => (
  <Fragment>
    <h2>{title}</h2>
    <div className="meal-showcase">
      {meals.map(m => <MealCard key={m} id={m}/>)}
    </div>
    <hr/>
  </Fragment>
);

export default MealShowcase;