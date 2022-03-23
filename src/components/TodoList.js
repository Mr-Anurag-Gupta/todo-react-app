import { Tab } from "bootstrap";
import { Component } from "react";
import { Tabs } from "react-bootstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleTodoStatusChange = this.handleTodoStatusChange.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
  }

  handleTodoStatusChange(todo, checked) {
    this.props.onTodoStatusChange(todo, checked);
  }

  handleTodoDelete(todo) {
    this.props.onTodoDelete(todo);
  }

  render() {
    return (
      <div>
        <Tabs className="mt-3">
          <Tab eventKey="all" title="all" className="mt-3">
            {this.props.todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index.toString()}
                  todo={todo}
                  onTodoStatusChange={this.handleTodoStatusChange.bind(this)}
                  onTodoDelete={this.handleTodoDelete.bind(this)}
                />
              );
            })}
          </Tab>
          <Tab eventKey="active" title="active" className="mt-3">
            {this.props.todos.map((todo, index) => {
              if (todo.isCompleted === false)
                return (
                  <TodoItem
                    key={index.toString()}
                    todo={todo}
                    onTodoStatusChange={this.handleTodoStatusChange.bind(this)}
                    onTodoDelete={this.handleTodoDelete.bind(this)}
                  />
                );
            })}
          </Tab>
          <Tab eventKey="completed" title="completed" className="mt-3">
            {this.props.todos.map((todo, index) => {
              if (todo.isCompleted === true)
                return (
                  <TodoItem
                    key={index.toString()}
                    todo={todo}
                    onTodoStatusChange={this.handleTodoStatusChange.bind(this)}
                    onTodoDelete={this.handleTodoDelete.bind(this)}
                  />
                );
            })}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TodoList;
