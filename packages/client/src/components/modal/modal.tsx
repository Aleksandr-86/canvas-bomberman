import React from 'react'
import styles from './modal.module.css'

interface Props {
  isActive?: boolean
  setActive?: any
  children?: any
}

export const Modal: React.FC<Props> = props => {
  const { children, isActive, setActive } = props

  const handleChange = () => {
    setActive(false)
  }

  return (
    <div
      className={
        isActive
          ? `${styles.modal} ${styles.modalActive}`
          : `${styles.modal} ${styles.modalClose}`
      }
      onClick={handleChange}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
