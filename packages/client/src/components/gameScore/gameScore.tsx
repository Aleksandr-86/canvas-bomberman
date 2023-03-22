import { useAppSelector } from '../../store/hooks'
import styles from './gameScore.module.css'
import { selectGameStats } from '../../store/selectors'
import { GAME_DURATION } from '../../features/game/const'

export const GameScore: React.FC = () => {
  const { score } = useAppSelector(selectGameStats)
  const cssVariables = {
    '--anim-duration': `${GAME_DURATION}s`,
  } as React.CSSProperties

  return (
    <div className={styles.panel}>
      <div className={styles.progressBar}>
        <div className={styles.bar}>
          <div className={styles.progress} style={cssVariables}></div>
        </div>
      </div>
      <div className={styles.panelScore}>{score}</div>
    </div>
  )
}
