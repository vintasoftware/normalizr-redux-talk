import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRatingById } from "../redux/selectors";
import { setRating } from "../redux/actions";

const Star = ({ icon, click }) => (
  <i onClick={click} className={`${icon} fa-star`}/>
);

class MealRater extends Component {

  handleStarClick = (newRate) => {
    const { setRating, id } = this.props;
    setRating(id, newRate);
  };

  render() {
    const { id, rating } = this.props;
    const value = rating.value;
    const stars = [...Array(5).keys()].map(s => s + 1);

    return (
      <div className="meal-rater">
        {stars.map(rate => rate <= value ?
          <Star key={`stars-${id}-${rate}`} icon="fas" click={() => this.handleStarClick(rate)}/> :
          <Star key={`stars-${id}-${rate}`} icon="far" click={() => this.handleStarClick(rate)}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, { id }) => ({
  rating: getRatingById(state, id)
});

const actionCreators = { setRating };

export default connect(mapStateToProps, actionCreators)(MealRater);