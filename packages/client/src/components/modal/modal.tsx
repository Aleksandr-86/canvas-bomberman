import styles from './modal.module.css'

interface ModalProps {
  isActive?: boolean
  setActive?: any
  children?: any
}

export const Modal = (props: ModalProps) => {
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
