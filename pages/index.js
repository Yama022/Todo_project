import Image from 'next/image'
import { useState, useEffect } from 'react'
import bgDesktopLight from '../public/images/bg-desktop-light.jpg'
import moon from '../public/images/icon-moon.svg'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const todoInput = document.getElementById('todoInput').value
    setTodoList([...todoList, todoInput])
    document.getElementById('todoInput').value = ''
  }

  const handleDeleteTodo = (e) => {
    const todoId = e.target.id
    const newTodoList = todoList.filter((todo, index) => index != todoId)
    setTodoList(newTodoList)
  }

  useEffect(() => {
  }, [todoList])
  
  return (
    <div className={styles.container}>

      <div className={styles.background}>
          <Image
            src={bgDesktopLight}
            alt="background-desktop"
          />

          <div className={styles.todo}>
            <h1>TODO</h1>

            <div className={styles.moon}>
            <Image
              src={moon}
              alt="moon"
            />
            </div>

            <div className={styles.input}>
              <form method="get" onSubmit={handleSubmit}>
              <button className={styles.button}></button>
              <input
                type="text"
                placeholder="Create a new todo..."
                id='todoInput'
                name='todoInput'
              >
              </input>
              </form>
            </div>
          </div>
      </div>

      <div className={styles.list}>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button key={index} className={styles.buttonDelete} onClick={handleDeleteTodo}>X</button>
            </li>
          ))}
        </ul>
        <div className={styles.listBack}>
          <p>{todoList.length} items left</p>
          <div className={styles.listBackButtons}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
    
  )
}
