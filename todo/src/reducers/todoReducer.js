import {v4 as uuid} from "uuid";

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: uuid()
    },
    {
        item: "Finish project",
        completed: false,
        id: uuid()
    }
];


export const reducer = (state, action) => {
    
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: uuid()
                }
            ];
        case "TOGGLE_TODO":
            return [
                state.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            ]
        case "CLEAR_COMPLETED":
            return [
                state.filter(todo => !todo.completed)
            ]
    };
};

