import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMealById} from "../redux/selectors";
import MealRater from "./MealRater";

class MealCard extends Component {

  render() {
    const {meal} = this.props;

    return (
      <div className="card">
        <img src={meal.image} className="card-img-top" alt={meal.image}/>
        <div className="card-body">
          <div className="card-title">{meal.name}</div>
          <MealRater
            id={meal.rating}
            key={meal.rating}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, {id}) => ({
  meal: getMealById(state, id)
});

export default connect(mapStateToProps)(MealCard);