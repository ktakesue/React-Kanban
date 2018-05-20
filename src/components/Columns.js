import React, { Component } from "react";
import Cards from "./Cards.js";

class Columns extends Component {
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

  render() {
    return (
      <div className="col-sm-4 columns">
        <ColumnList cards={this.state.cards} />
      </div>
    );
  }
}

function ColumnList(props) {
  return props.cards.map((element, idx) => {
    return (
      <div>
        <Cards
          key={element.id}
          title={element.title}
          priority={element.priority}
          status={element.status}
          created_by={element.created_by}
          asssigned_to={element.asssigned_to}
        />
      </div>
    );
  });
}

export default Columns;
