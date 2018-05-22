import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className="card-component">
        <div className="card-title">Title: {this.props.card.title}</div>
        <div className="card-details">
          Priority: {this.props.card.priority}
          <br />
          Status: {this.props.card.status}
          <br />
          Created by: {this.props.card.created_by}
          <br />
          Assigned to: {this.props.card.assigned_to}
        </div>
      </div>
    );
  }
}

export default Cards;
