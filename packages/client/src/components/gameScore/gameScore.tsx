import { useAppSelector } from '../../store/hooks'
import styles from './gameScore.module.css'
import { selectGameStats } from '../../store/selectors'

export const GameScore = () => {
  const { score } = useAppSelector(selectGameStats)

  return (
    <div className={styles.panel}>
      <div className={styles.progressBar}>
        <div className={styles.bar}>
          <div className={styles.progress}></div>
        </div>
      </div>

      <div className={styles.panelScore}>{score}</div>
    </div>
  )
}
