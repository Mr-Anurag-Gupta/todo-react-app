import { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ label: e.target.value });
  }

  handleClick(e) {
    this.props.onAdd(this.state.label);
    this.setState({ label: "" });
  }

  render() {
    return (
      <InputGroup className="mt-3">
        <FormControl
          value={this.state.label}
          onChange={this.handleChange}
          placeholder="Enter todo here..."
          aria-label="Enter todo"
          aria-describedby="add-button"
        ></FormControl>
        <Button variant="primary" id="add-button" onClick={this.handleClick}>
          Add
        </Button>
      </InputGroup>
    );
  }
}

export default TodoAdd;
