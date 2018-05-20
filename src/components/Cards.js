import React, { Component } from "react";
import { getCards } from "../containers/inventory_db.js";

class Cards extends Component {
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
  }

  componentDidMount() {
    getCards().then(cards => {
      this.setState({ cards }, () => {
        console.log("this.state", this.state);
      });
    });
  }

  // renderListOfCards() {
  //   return this.state.cards.map(card => <div>{card.title}</div>);
  // }

  render() {
    return (
      <div>
        <CardsList cards={this.state.cards} />
      </div>
    );
  }
}

function CardsList(props) {
  return props.cards.map(card => (
    <div>
      <div className="card-component">
        <div className="card-title">Title: {card.title}</div>
        <div className="card-details">
          Priority: {card.priority}
          <br />
          Status: {card.status}
          <br />
          Created by: {card.created_by}
          <br />
          Assigned to: {card.assigned_to}
        </div>
      </div>
    </div>
  ));
}

export default Cards;
