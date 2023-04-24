import React from "react";
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import EditTodo from "./EditTodo";
import { deleteTask } from "../JS/actions/ActionTask";
const Todo = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo" style={{ display: "flex"  }}>
      <div className="todoText">
        <h2> {el.text} </h2>
      </div>

      <EditTodo el={el} />
      <Button style={{  fontFamily: 'Just Another Hand', color:'black', backgroundColor:'white', border:'solid'}} onClick={() => dispatch(deleteTask(el.id))}>DELETE</Button>
    </div>
  );
};

export default Todo;