import React from 'react'
import styles from './avatar.module.css'

interface Props {
  src: string
  size?: 'Small' | 'Medium' | 'Large' | 'Gargantuan'
  onAvatarClick?: () => void
  disabled?: boolean
}

export const Avatar: React.FC<Props> = props => {
  const { src, size = 'Medium', disabled = true, onAvatarClick } = props

  const handleClick = () => {
    if (disabled || !onAvatarClick) {
      return
    }

    onAvatarClick()
  }

  return (
    <div
      className={
        disabled
          ? styles.profilePicture
          : `${styles.profilePicture} ${styles.clickable}`
      }>
      <img
        src={src}
        className={`${styles.profileImg} ${styles['profileImg' + size]}`}
        alt="profile picture"
        onClick={handleClick}
      />
    </div>
  )
}
