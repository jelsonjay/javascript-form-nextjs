import React, {useState, useContext} from 'react'
import {TodoContext} from './../context/DataProvider'
import styles from './../styles/Footer.module.css'

const TodoFooter = () => {

  const [checkedAll, setCheckedAll] = useState(false)
  const [todos, setTodos] = useContext(TodoContext)

 const handleCheckAll = () => {
   const newTodos = [...todos]
   newTodos.forEach(todo => {
     todo.complete = !checkedAll
   })
   setTodos(newTodos)
   setCheckedAll( !checkedAll )
 }

 const newTodosComplete = () =>{
  return todos.filter(todo => todo.complete === false)
 }

 // deleteTodo
 const deleteTodo = () =>{
   setTodos(newTodosComplete)
   setCheckedAll(false)
 }

  return (
    
    <>
    {todos.length === 0 ? <h2 className={styles.subtitle}>Add Todo!</h2>
    :     
    
    <div className={styles.todoFooter}>
    <label className={styles.label} htmlFor='all'>
    <input className={styles.checkbox} type='checkbox' name='all' 
    onChange={handleCheckAll} checked={checkedAll}/>
    All
    </label>
    <span>You have {newTodosComplete().length} item</span>
    <button className={styles.delete} id='delete' onClick={deleteTodo}>Delete</button>
    </div>
    }
  </>
  );
}
  

export default TodoFooter