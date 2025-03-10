import {createContext, useContext} from 'react'


export const TodoContext = createContext({
    todos:[ 
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        } // adds data
    ],
    addTodo: (todo) => {},
    updateTodo:(id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} //adds functionality

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider