import React, {useState, useContext, useRef}  from 'react'
import {TodoContext} from './DataProvider'
import styles from '../styles/Form.module.css'

const TodoForm = () => {
 const [todos, setTodos] = useContext(TodoContext)
 const [todoName, setTodoName] = useState('')


const addTodo = e =>{
  e.preventDefault();
  todoName.trim() !== '' && setTodos([...todos, {name: todoName, complete: false}])
  setTodoName('')
}

  return (
    <>
    <form className={styles.form} onSubmit={addTodo}>
    <input className={styles.input} type='text'name='text' 
     placeholder='Enter a todo item' value={todoName} 
    onChange={e => setTodoName(e.target.value)}/> 
    <button className={styles.button}>Add Item</button>
    </form>
    </>
  )
}

export default TodoForm