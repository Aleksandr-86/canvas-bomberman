import styles from './button.module.css'

interface Props {
  title: string
  class?: string
}

export const Button = (props: Props) => {
  const { title = 'Кнопка' } = props

  if (props.class) {
    return (
      <button className={`${styles.button} ${props.class}`}>{title}</button>
    )
  } else {
    return <button className={styles.button}>{title}</button>
  }
}
