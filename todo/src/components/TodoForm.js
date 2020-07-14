import React, {useState, useReducer} from "react";
import {initialState, reducer} from "../reducers/todoReducer";

const TodoForm = props => {
    const initialFormValue = "";
    const [state, dispatch] = useReducer(reducer, initialState);
    const [formValue, setFormValue] = useState(initialFormValue);

    
    const handleChanges = e => {
        setFormValue(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
          type: "ADD_TODO",
          payload: formValue
        })
        setFormValue(initialFormValue);
    };
    
    

    
    return(

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todoInput"
                value={formValue}
                onChange={handleChanges}
            />
            <button>
                Add Todo  
            </button>
        </form>
    )
}

export default TodoForm;
