import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchMeals} from "../redux/actions";
import MealShowcase from "./MealShowcase";
import {selectBreakfastMeals, selectDinnerMeals, selectLunchMeals} from "../redux/selectors";

class MealsContainer extends Component {
  componentDidMount() {
    const {fetchMeals} = this.props;

    fetchMeals();
  }

  render() {
    const {breakfastMeals, lunchMeals, dinnerMeals} = this.props;

    return (
      <div className="meals-container">
        <MealShowcase title="Breakfast" meals={breakfastMeals}/>
        <MealShowcase title="Lunch" meals={lunchMeals}/>
        <MealShowcase title="Dinner" meals={dinnerMeals}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    breakfastMeals: selectBreakfastMeals(state),
    lunchMeals: selectLunchMeals(state),
    dinnerMeals: selectDinnerMeals(state),
});

const actionCreators = {fetchMeals};

export default connect(mapStateToProps, actionCreators)(MealsContainer);