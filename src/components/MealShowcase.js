import React from 'react';
import MealCard from "./MealCard";
import { connect } from "react-redux";
import { getCategoryById, getMealsByCategory } from "../redux/selectors";

const MealShowcase = ({ category, meals }) => (
  <>
    <h2>{category.name}</h2>
    <div className="meal-showcase">
      {meals.map(m => <MealCard key={m} id={m}/>)}
    </div>
    <hr/>
  </>
);

const mapStateToProps = (state, { id }) => ({
  category: getCategoryById(state, id),
  meals: getMealsByCategory(state, id)
});

export default connect(mapStateToProps)(MealShowcase);