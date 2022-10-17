import Image from 'next/image'
import { useState, useEffect } from 'react'
import bgDesktopLight from '../public/images/bg-desktop-light.jpg'
import moon from '../public/images/icon-moon.svg'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const todoInput = document.getElementById('todoInput').value
    setTodoList([...todoList, todoInput])
    document.getElementById('todoInput').value = ''
  }

  const handleDeleteTodo = () => {
    const todoListCopy = [...todoList]

    todoListCopy.map((todo, index) => {
      if (todo === todoList[index]) {
        todoListCopy.splice(index, 1)
        setTodoList(todoListCopy)
      }
    })
  }

  const handleClickButton = (e) => {
    const todoIndex = e.target.id
    const todoListCopy = [...todoList]
    todoListCopy.splice(todoIndex, 1)
    setTodoList(todoListCopy)
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
              <button className={styles.input.button} ></button>
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
              <div className={styles.todoList} key={index} >
                <li id="liItem" onClick={handleClickButton} value={todo}>
                  {todo}
                  <button id={index} className={styles.buttonDelete} onClick={handleDeleteTodo}>✖️</button>
                </li>
              </div>
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
