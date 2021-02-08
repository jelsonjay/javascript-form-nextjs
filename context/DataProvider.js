import React, {createContext, useState, useEffect} from 'react'

export const TodoContext = createContext()
export const TodoProvider = ({children}) => {
  
const [todos, setTodos] = useState([])

// get Items to LocalStorage
useEffect(() => {
  const todoStore = JSON.parse(localStorage.getItem('todoStore'))
  if(todoStore) setTodos(todoStore)
}, [])

// set Items to LocalStorage
useEffect(() => {
  localStorage.setItem('todoStore', JSON.stringify(todos))
},[todos])

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
    {children}
    </TodoContext.Provider>
  )
}
