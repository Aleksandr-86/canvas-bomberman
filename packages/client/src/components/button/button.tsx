import classes from './button.module.css'


interface Props {
    title: string
    class?: string
    type?: string
}

export const Button = (props: Props) => {
    const { title = 'Кнопка' } = props

    if (props.class) {
        return (
            <button className={`${classes.forum__btn} ${props.class}`}>{title}</button>
        )
    } else {
        return <button className={classes.forum__btn}>{title}</button>
    }
}