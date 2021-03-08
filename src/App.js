import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// importing Components
import TodoForm from "./components/todoForm";
import Todo from "./components/Todo";

//redux
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
};

export default App;
