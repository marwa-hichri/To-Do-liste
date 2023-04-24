import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/ActionTask";


const AddTodo = () => {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const dispatch = useDispatch()
    return (
            <Form style={{display:"flex", width:"70%", margin:"150px auto" , justifyContent:"space-evenly"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="add your todo " value={input} onChange={(e) => handleInput(e)} />
                </Form.Group>
                <div  > 
                <Button  onClick={() => dispatch(addTask({id: Math.random(), text:input})) } 
                style={{width:"150px", height:"40px",  fontFamily: 'Just Another Hand', color:'black', backgroundColor:'white', border:'solid'

            }}>
                    ADD
                </Button>
                </div>
            </Form>
    );
};

export default AddTodo;