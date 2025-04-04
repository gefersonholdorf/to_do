import type React from 'react'
import styles from './App.module.css'
import logo from './assets/logo.png'
import { ButtonComponent } from './components/button'
import { InputComponent } from './components/input'
import { TaskComponent } from './components/task'
import { useState } from 'react'

export interface Task {
  id: number
  name: string,
  concluided: boolean
}

export let TASKS: Task[] = [
  {
    id: 1,
    name: "Gerar Financeiro",
    concluided: true
  },
  {
    id: 2,
    name: "Ir ao médico",
    concluided: true
  },
  {
    id: 3,
    name: "Ir para academia",
    concluided: false
  }
]

export function App() {

  const [input, setInput] = useState('')
  const [countTaskCreated, setCountTaskCreated] = useState(TASKS.length)
  const [countTasksConcluided, setCountTasksCouncluided] = useState(() => {
    const tasksConcluided = TASKS.filter((task) => {
      return task.concluided === true
    })

    return tasksConcluided.length
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  function handleCreateTask() {

    if(!input) {
      return null
    }

    const newTask: Task = {
      id: TASKS.length + 1,
      name: input,
      concluided: false
    }

    TASKS.push(newTask)
    setCountTaskCreated(TASKS.length)

    setInput('')
  }

  function handleConcluidedTask(value: number) {
    setCountTasksCouncluided(value)
  }

  function handleTaskDelete(taskDelete: Task) {
    TASKS = TASKS.filter((task) => {
      return task.id !== taskDelete.id
    })

    setCountTaskCreated(TASKS.length)
    setCountTasksCouncluided(() => {
      const tasksConcluided = TASKS.filter((task) => {
        return task.concluided === true
      })
  
      return tasksConcluided.length
    })
  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <img src={logo} alt="Logo ToDoList" />
        </header>

        <main>
          <div className={styles.inputWrapper}>
            <InputComponent onChange={handleChange} value={input} />
          </div>
          <div>
            <ButtonComponent typeButton='CREATE' onClick={handleCreateTask} />
          </div>
        </main>

        <section>
          <div className={styles.taskHeader}>
            <div className={styles.dsFlex}>
              <p>Tarefas criadas</p>
              <span>{countTaskCreated}</span>
            </div>

            <div className={styles.dsFlex}>
              <p>Concluídas</p>
              <span>{countTasksConcluided} de {countTaskCreated}</span>
            </div>
          </div>

          <div>
            {TASKS.map(task => {
              return (
                  <TaskComponent key={task.id} task={task} onConcluidedTask={handleConcluidedTask} onDeleteTask={handleTaskDelete} />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}