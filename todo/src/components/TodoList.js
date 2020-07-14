import React, {useReducer} from "react";
import {reducer, initialState} from "../reducers/todoReducer";



const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleTodo = e => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: e.target.id
        })
      };

      const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED",
        })
    };
    
    return (
        <div>
            {state.map(todo => {
                return <p
                    key={todo.id}
                    id={todo.id}
                    onClick={toggleTodo}
                    className = {`todo${todo.completed ? " completed" : ""}`}
                >
                    {todo.item}
                </p>
            })}

            
        
        
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
        
    )
}

export default TodoList;