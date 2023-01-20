import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { Link } from 'react-router-dom'
import { getCurrentScore } from '../../store/selectors'
import { Button } from '../button/button'
import styles from './gameEnd.module.css'
import baseStyles from '../../app/app.module.css'

interface Props {
  onReloadGame: () => void
}

export const GameEnd: React.FC<Props> = props => {
  const { onReloadGame } = props
  const currentScore = useAppSelector(getCurrentScore)

  return (
    <div className={styles.gameEnd}>
      <p className={styles.gameEndText}>Игра окончена!</p>
      <p className={styles.gameEndText}>
        Количество набранных очков: {currentScore}
      </p>
      <div className={styles.gameEndButtons}>
        <Link
          to="/"
          className={`${baseStyles.linkButton} ${styles.gameEndButton}`}>
          На главную
        </Link>
        <Button onClick={onReloadGame} className={styles.gameEndButton}>
          Сыграть еще раз
        </Button>
        <Link
          to="/leaderboard"
          className={`${baseStyles.linkButton} ${styles.gameEndButton}`}>
          Посмотреть таблицу лидеров
        </Link>
      </div>
    </div>
  )
}
