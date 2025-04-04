import styles from './button.module.css'

import layer from '../assets/layer.png'
import btnDefault from '../assets/btn-default.png'
import type React from 'react'

export interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    typeButton: 'DELETE' | 'CREATE'
}

export function ButtonComponent(props: ButtonComponentProps) {
    const {typeButton, ...elements} = props
    return (
        <>
            {props.typeButton === 'CREATE' ? (
                <div className={styles.default} role='button' onClick={elements.onClick}>
                    <span>Criar</span>
                    <img src={layer} alt="" />
                </div>
            ) : (
                <div className={styles.delete} onClick={elements.onClick}>
                    <img src={btnDefault} alt="" />
                </div>
            )}
        </>
    )
}