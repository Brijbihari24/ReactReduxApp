import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    if (title == "") {
      return alert("please add todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handeSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add your todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addontype="prepend">
            <Button color="primary" onClick={handeSubmit}>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

//2 important methods to remember and its syntax
const mapStateToprops = (state) => ({});
// this method means we are passing our centra state directly as a props and can take data from there

const mapDispatchTopropos = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToprops, mapDispatchTopropos)(TodoForm);
