import type React from 'react'
import styles from './input.module.css'

export interface InputComponentProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputComponent(props: InputComponentProps) {
    return (
        <>
            <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' onChange={props.onChange} value={props.value} />
        </>
    )
}