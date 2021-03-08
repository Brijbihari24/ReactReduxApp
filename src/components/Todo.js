import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { removeTodo } from "../action/todo";

const Todo = ({ todos, markeComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span onClick={() => markeComplete(todo.id)} className="float-right">
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToprops = (state) => ({
    todos:state.todos
})

const mapDispatchTopropos =dispatch => ({
    markeComplete: id => {
        dispatch(removeTodo(id));
    }
})

export default connect(mapStateToprops, mapDispatchTopropos )(Todo);
