import styles from './hero-bomb.module.css'

import heroBomb from '../../assets/images/hero-bomb.png'

export const HeroBomb = () => {
  return (
    <img
      className={styles.heroBomb}
      src={heroBomb}
      width={426}
      height={426}
      alt="Герой символизирующий ошибку"
      draggable={false}
    />
  )
}
