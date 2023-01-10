import type { ReactNode } from 'react'

import styles from './button.module.css'

interface Props {
  onButtonClick?: () => void
  children?: ReactNode
  className?: string
}

export const Button = (props: Props) => {
  const {
    onButtonClick = () => undefined,
    children = `Кнопка`,
    className = ``,
  } = props
  return (
    <button className={`${styles.button} ${className}`} onClick={onButtonClick}>
      {children}
    </button>
  )
}
