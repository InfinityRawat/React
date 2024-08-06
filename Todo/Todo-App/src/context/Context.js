import React, { useContext } from "react";


export const TodoContext = React.createContext({
   todos: [{
        id:1,
        todo:"",
        complete:true
    }],
    toggleComplete: ((id)=>{}),
    addTodo: ((id,todo)=>{}),
    updateTodo: ((id,todo)=>{}),
    deleteTodo: ((id)=>{}),

});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext(){
        return useContext(TodoContext)
}