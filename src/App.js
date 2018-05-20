import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Columns from "./components/Columns.js";
import AddCard from "./containers/AddCard.js";
import { addCardtoDB } from "./containers/inventory_db.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card) {
    addCardtoDB(card).then(cards => {
      this.setState({ cards });
    });
  }

  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <AddCard addCard={this.addCard} />
          {/* <div className="column-container"> */}
          {/* <div className="column-lists"> */}
          <h1 className="column-title"> Queue: </h1>
          <Columns />
          <h1 className="column-title"> In-Progress: </h1>
          <Columns />
          <h1 className="column-title"> Done: </h1>
          <Columns />
        </div>
        {/* </div> */}
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
