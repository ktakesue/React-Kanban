import React, { Component } from "react";

class AddCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      priority: "",
      status: "",
      created_by: "",
      asssigned_to: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this.state);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log("value", value);
    console.log("name", name);
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log("state", this.state);
      }
    );
  }

  render() {
    return (
      <div className="addForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Title:
            <input onChange={this.handleChange} name="title" type="text" />
          </label>
          <label>
            {" "}
            Priority:
            <input onChange={this.handleChange} name="priority" type="text" />
          </label>
          <label>
            {" "}
            Status:
            <select onChange={this.handleChange} name="status">
              <option value="queue">Queue</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          <label>
            {" "}
            Created By:
            <input onChange={this.handleChange} name="created_by" type="text" />
          </label>
          <label>
            {" "}
            Assigned To:
            <input
              onChange={this.handleChange}
              name="assigned_to"
              type="text"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddCardForm;
