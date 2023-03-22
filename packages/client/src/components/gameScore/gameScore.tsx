import { useAppSelector } from '../../store/hooks'
import styles from './gameScore.module.css'
import { selectGameStats } from '../../store/selectors'
import { GAME_DURATION } from '../../features/game/const'
import bombAmountUpImg from '../../assets/images/bombAmountUp.png'
import bombAmountUpImgGray from '../../assets/images/bombAmountUpGray.png'
import bombRangeUpImg from '../../assets/images/bombRangeUp.png'
import bombRangeUpImgGray from '../../assets/images/bombRangeUpGray.png'
import playerSpeedUpImg from '../../assets/images/playerSpeedUp.png'
import playerSpeedUpImgGray from '../../assets/images/playerSpeedUpGray.png'
import detonatorImg from '../../assets/images/detonator.png'
import detonatorImgGray from '../../assets/images/detonatorGray.png'
import bombPassImg from '../../assets/images/bombPass.png'
import bombPassImgGray from '../../assets/images/bombPassGray.png'
import flamePassImg from '../../assets/images/flamePass.png'
import flamePassImgGray from '../../assets/images/flamePassGray.png'

const cssVariables = {
  '--anim-duration': `${GAME_DURATION}s`,
} as React.CSSProperties

export const GameScore: React.FC = () => {
  const { score, inProgress } = useAppSelector(selectGameStats)

  return (
    <div className={styles.panel}>
      <div className={styles.progressBar}>
        <div className={styles.bar}>
          <div
            className={inProgress ? styles.progressGo : styles.progressStopped}
            style={cssVariables}></div>
        </div>
      </div>

      <div className={styles.buffs}>
        <div className={styles.buff}>
          <img className={styles.img} src={bombAmountUpImg} />
          <div>×2</div>
        </div>
        <div className={styles.buff}>
          <img className={styles.img} src={bombRangeUpImg} />
          <div>×2</div>
        </div>
        <img className={styles.img} src={playerSpeedUpImg} />
        <img className={styles.img} src={detonatorImg} />
        <img className={styles.img} src={bombPassImg} />
        <img className={styles.img} src={flamePassImg} />
      </div>

      {/* <div className={styles.panelScore}>{score}</div> */}
      <div className={styles.panelScore}>88888</div>
    </div>
  )
}
