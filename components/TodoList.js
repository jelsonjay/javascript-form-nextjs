import React, {useContext }from 'react'
import ListItems from './ListItems'
import {TodoContext} from './DataProvider'
import style from '../styles/TodoList.module.css'

const TodoList = () => {

const [todoList, setTodoList] = useContext(TodoContext)

const switchComplete = id => {
  const newTodos = [...todoList]
  newTodos.forEach((item, index) => {
  if(index === id){
    item.complete = !item.complete
  }
  })
  setTodoList(newTodos)
}

const handleEditTodos = (editvalue, id) => {
  const newTodos = [...todoList]
  newTodos.forEach((item, index) => {
    if(index === id){
      item.name = editvalue
    }
  })
  setTodoList(newTodos)
}

  return (
    <>
    <ul className={style.checkbox}>
{
  todoList.map((item, index) => (
    <ListItems todo={item} key={index} id={index}
    checkComplete={switchComplete}
    handleEditTodos={handleEditTodos}
    />
  ))
}
    </ul>
    </>
  )
}

export default TodoList
