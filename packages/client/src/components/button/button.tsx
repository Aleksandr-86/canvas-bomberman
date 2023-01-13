import styles from './button.module.css'

export const Button = (props: React.ComponentPropsWithoutRef<'button'>) => {
  const { children = 'Кнопка', className } = props
  const classes = className ? `${styles.button} ${className}` : styles.button
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
