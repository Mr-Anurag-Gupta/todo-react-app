import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const dummyTodos = [
  { todo: "Buys shirts", isCompleted: true },
  { todo: "Visit uncle", isCompleted: false },
  { todo: "Write a blog on sample react app", isCompleted: false },
  { todo: "Practise coding on leetcode platform", isCompleted: false },
  {
    todo: "Resume the learning on Asp.Net Core WebAPI/MVC",
    isCompleted: false,
  },
];

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: dummyTodos,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleTodoStatusChange = this.handleTodoStatusChange.bind(this);
  }

  handleAdd(todo) {
    const todoObj = {
      todo,
      isCompleted: false,
    };

    this.setState((prevState) => ({
      todos: prevState.todos.concat(todoObj),
    }));
  }

  handleTodoStatusChange(todo, checked) {
    this.setState((prevState) => {
      let todoList = prevState.todos.map((task) => {
        if (task.todo === todo.todo) task.isCompleted = checked;
        return task;
      });
      return { todos: todoList };
    });
  }

  handleTodoDelete(todo) {
    const filteredTodos = this.state.todos.filter((task) => {
      if (task.todo !== todo.todo) return task;
    });
    this.setState({ todos: filteredTodos });
  }

  render() {
    return (
      <Container className="wrapper">
        <Row>
          <Col>
            <h2 className="text-center mt-3 todoapp__heading">To-Do List</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoAdd onAdd={this.handleAdd} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList
              todos={this.state.todos}
              onTodoStatusChange={this.handleTodoStatusChange}
              onTodoDelete={this.handleTodoDelete}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoApp;
