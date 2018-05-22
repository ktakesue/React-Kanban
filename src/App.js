import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header.js";
import Columns from "./components/Columns.js";
import AddCardForm from "./containers/AddCardForm.js";
// import { addCardtoDB, getCards } from "./containers/inventory_db.js";
import { loadCards, addCard } from "./actions/actions.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reducers from "./reducers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: "",
          title: "",
          priority: "",
          status: "",
          createdBy: "",
          assignedTo: ""
        }
      ]
    };
    this.addCard = this.addCard.bind(this);
  }

  // componentDidMount() {
  //   loadCards().then(cards => {
  //     this.setState({ cards }, () => {
  //       console.log("this.state", this.state);
  //     });
  //   });
  // }

  componentWillMount() {
    this.props.loadCards();
  }

  addCard(card) {
    addCard(card).then(cards => {
      this.setState({ cards });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <AddCardForm addCard={this.addCard} />
          <div className="row">
            {/* <h1 className="column-title"> Queue: </h1> */}
            <Columns cards={this.props.cards} />
            {/* <h1 className="column-title"> In-Progress: </h1> */}
            <Columns cards={this.props.cards} />
            {/* <h1 className="column-title"> Done: </h1> */}
            <Columns cards={this.props.cards} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  //goes to the reducer
  return {
    cards: state.cardReducer.cards // calls reducer inital state
  };
};

const mapDispatchToProps = dispatch => {
  //second argument is getState
  return {
    loadCards: () => {
      //set to props above
      dispatch(loadCards()); //calling from action
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
