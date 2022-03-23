import { Form, ListGroup } from "react-bootstrap";
import { IoTrash } from "react-icons/io5";
import Button from "react-bootstrap/Button";

function TodoItem(props) {
  function handleTodoStatusChange(event) {
    props.onTodoStatusChange(props.todo, event.target.checked);
  }

  function handleTodoDelete() {
    props.onTodoDelete(props.todo);
  }

  function Item(cls) {
    return (
      <Form.Check
        inline
        type="checkbox"
        className={cls}
        label={props.todo.todo}
        checked={props.todo.isCompleted}
        onChange={handleTodoStatusChange.bind(this)}
      ></Form.Check>
    );
  }

  return (
    <ListGroup.Item>
      {props.todo.isCompleted ? (
        <>
          {Item("todoitem_completed")}
          <Button
            variant="primary"
            className="btn-sm"
            onClick={handleTodoDelete}
          >
            <IoTrash />
          </Button>
        </>
      ) : (
        Item("")
      )}
    </ListGroup.Item>
  );
}

export default TodoItem;
