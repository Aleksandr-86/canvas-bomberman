import styles from './button.module.css'

interface Props {
  children: string
  className?: string
  [index: string]:
    | undefined
    | string
    | (() => unknown)
    | ((e: Event) => unknown)
}

export const Button = (props: Props) => {
  const { children = 'Кнопка', className } = props

  const classes = className ? `${styles.button} ${className}` : styles.button

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
