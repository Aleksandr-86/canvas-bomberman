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
  const { score, inProgress, buffs } = useAppSelector(selectGameStats)

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
          <img
            className={styles.img}
            src={buffs.bombAmountUp > 0 ? bombAmountUpImg : bombAmountUpImgGray}
          />
          <div>&#43;{buffs.bombAmountUp}</div>
        </div>
        <div className={styles.buff}>
          <img
            className={styles.img}
            src={buffs.bombRangeUp > 0 ? bombRangeUpImg : bombRangeUpImgGray}
          />
          <div>&#43;{buffs.bombRangeUp}</div>
        </div>
        <img
          className={styles.img}
          src={
            buffs.playerSpeedUp > 0 ? playerSpeedUpImg : playerSpeedUpImgGray
          }
        />
        <img
          className={styles.img}
          src={buffs.detonator > 0 ? detonatorImg : detonatorImgGray}
        />
        <img
          className={styles.img}
          src={buffs.bombPass > 0 ? bombPassImg : bombPassImgGray}
        />
        <img
          className={styles.img}
          src={buffs.flamePass > 0 ? flamePassImg : flamePassImgGray}
        />
      </div>

      <div className={styles.panelScore}>{score}</div>
    </div>
  )
}
