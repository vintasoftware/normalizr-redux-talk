import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMeals } from "../redux/actions";
import MealShowcase from "./MealShowcase";
import { selectCategoryList } from "../redux/selectors";

class MealsContainer extends Component {
  componentDidMount() {
    const { fetchMeals } = this.props;

    fetchMeals();
  }

  render() {
    const { categoryList } = this.props;

    return (
      <div className="meals-container">
        {categoryList.map((category) => <MealShowcase key={category} id={category}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryList: selectCategoryList(state)
});

const actionCreators = { fetchMeals };

export default connect(mapStateToProps, actionCreators)(MealsContainer);