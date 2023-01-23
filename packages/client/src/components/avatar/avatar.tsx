import React from 'react'
import styles from './avatar.module.css'

type AvatarSize = 'Small' | 'Medium' | 'Large' | 'Gargantuan'

interface Props {
  src: string
  size?: AvatarSize
  onAvatarClick?: () => void
  disabled?: boolean
}

export const Avatar: React.FC<Props> = props => {
  const { src, size = 'Medium', disabled = true, onAvatarClick } = props

  const handleClick = () => {
    !disabled && onAvatarClick?.()
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
