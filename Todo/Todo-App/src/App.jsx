import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/Context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo= ((todo)=>{
    setTodos((prevTodo)=>[{id:Date.now(),...todo},...prevTodo]);
  })
  const updateTodo= ((id,todo)=>{
    // console.log(`id is ${id} and todo is ${todo.todo}`);
    setTodos((prev)=>
      prev.map((prevTodo)=>
        {
          return prevTodo.id===id?todo:prevTodo
        }))

      //  todos.forEach((todo)=>console.log(todo));
  })
  const deleteTodo = ((id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!==id)))
  })

  const toggleComplete = (id)=>{
    console.log(`id is ${id}`);

      setTodos((prevTodos)=>
        (prevTodos.map((todo)=>
        {
            // console.log("TODO's are");
            // console.log(todo);

            return todo.id==id?{...todo,complete:!todo.complete}:todo     
        })))} 

  useEffect(()=>{
       const todosLocal=  JSON.parse(localStorage.getItem("todos"))
        if(todosLocal && todosLocal.length >0){
            setTodos(todosLocal)
        }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (

    <>
    <TodoContextProvider value={{
    todos,
    toggleComplete,
    addTodo,
    updateTodo,
    deleteTodo,
    }}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>{
                console.log(todo.id);
                return(
                <div key={todo.id}
                  className='w-full' > 
                  <TodoItem todo={todo}/>
                </div>
              )})}
        </div>
    </div>
</div>
</TodoContextProvider>
</>
  )
}

export default App
