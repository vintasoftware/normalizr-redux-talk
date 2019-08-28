import React from 'react';
import MealCard from "./MealCard";

const MealShowcase = ({meals, title}) => (
  <>
    <h2>{title}</h2>
    <div className="meal-showcase">
      {meals.map(m => <MealCard key={m} id={m}/>)}
    </div>
    <hr/>
  </>
);

export default MealShowcase;