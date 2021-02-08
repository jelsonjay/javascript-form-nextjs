import Head from 'next/head'
import TodoFooter from './../components/TodoFooter';
import TodoForm from './../components/Form/TodoForm';
import TodoList from './../components/TodoList';
import {TodoProvider}  from './../context/DataProvider'
import styles from './../styles/Form.module.css'

function App() {
  return (
    <>
    <Head>
    <title>Simple todo app | Home</title>
    <meta name='keywords' content='Digital' />
    </Head>
    <TodoProvider>
    <div className={styles.container}>
    <h1 className={styles.text}>Simple Todo App</h1>
    <TodoForm />
    <TodoList />
    <TodoFooter />
    </div>
    </TodoProvider>
    </>
  );
}

export default App;
