import React from "react";
const Todo=(props)=>{

    return (
    <>
    <div className="todo_style">
    <i class="fa-light fa-xmark" aria-hidden="true"
    onClick={()=>{props.onSelect(props.id);}}
    />
    <li>{props.text}</li>;
    </div>
    </>
);};
export default Todo;