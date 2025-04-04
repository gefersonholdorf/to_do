import { TASKS, type Task } from '../App'
import { ButtonComponent } from './button'
import { CheckboxComponent } from './checkbox'
import styles from './task.module.css'
import { useState } from 'react'

export interface TaskProps{
    task: Task
    onConcluidedTask: (value: number) => void
    onDeleteTask: (task: Task) => void
}

export function TaskComponent(props: TaskProps) {
    const [isCheckboxValid, setIsCheckboxValid] = useState(props.task.concluided)

    function handleChecked() {
        setIsCheckboxValid(!isCheckboxValid)

        props.task.concluided = !isCheckboxValid

        const valueConcluided = () => {
            const tasksConcluided = TASKS.filter((task) => {
              return task.concluided === true
            })

            return tasksConcluided.length
        }
        
        props.onConcluidedTask(valueConcluided())
    }

    function handleDeleteTask() {
        props.onDeleteTask(props.task)
    }

    return (
        <>
            <div className={styles.taskContainer}>
                <div>
                    <CheckboxComponent checked={isCheckboxValid} onChange={handleChecked} />
                </div>
                <div>
                    <p className={(isCheckboxValid === true) ? styles.underline : ''}>
                        {props.task.name}
                    </p>
                </div>
                <div>
                    <ButtonComponent typeButton='DELETE' onClick={handleDeleteTask} />
                </div>
            </div>
        </>
    )
}