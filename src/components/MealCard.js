import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMealById} from "../redux/selectors";
import MealRater from "./MealRater";

class MealCard extends Component {

  render() {
    const {meal} = this.props;

    return (
      <div className="card">
        <img src={meal.get('image')} className="card-img-top" alt={meal.get('name')}/>
        <div className="card-body">
          <div className="card-title">{meal.get('name')}</div>
          <MealRater
            id={meal.get('rating')}
            key={meal.get('rating')}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, {id}) => ({
  meal: getMealById(state, id)
});

export default connect(mapStateToProps)(MealCard);