import classes from './input.module.css'


interface Props {
    placeholder: string
    class?: string
    type: string
}

export const Input = (props: Props) => {
    const { placeholder = 'Инпут' } = props

    if (props.class) {
        return (
            <label>
                <input className={`${classes.form__input} ${props.class}`} type={props.type} placeholder={placeholder} />
            </label>
        )
    } else {
        return (
            <label>
                <input className={classes.form__input} type={props.type} placeholder={placeholder} />
            </label>
        )
    }
}
