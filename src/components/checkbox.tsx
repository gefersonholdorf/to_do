import styles from './checkbox.module.css'

export interface CheckboxComponentProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export function CheckboxComponent(props: CheckboxComponentProps) {
    return (
        <>  
            <div className={styles.checkboxWrapper}>
            <label>
                <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                <div className={styles.customCheckbox}></div>
            </label>
        </div>
        </>
    )
}