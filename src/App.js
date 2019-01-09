import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import MealsShowcase from "./components/MealsContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <MealsShowcase />
      </Fragment>
    );
  }
}

export default App;
