import React, { Component } from "react";
import Cards from "./Cards.js";

class Columns extends Component {
  render() {
    return (
      <div className="col-sm-4 columns">
        {this.props.cards.map(data => {
          return <Cards key={data.id} card={data} />;
        })}
      </div>
    );
  }
}

export default Columns;
