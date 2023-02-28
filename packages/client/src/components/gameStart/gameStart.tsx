import { Button } from '../button/button'
import styles from './gameStart.module.css'
import keyboard from '../../assets/images/keyboard.png'
import { useAppDispatch } from '../../store/hooks'
import { GameStatus, setStatus } from '../../store/game/gameSlice'

export const GameStart: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.gameStart}>
      <p className={styles.gameStartText}>Куда жать, чтобы было весело?!</p>
      <img
        src={keyboard}
        width={720}
        height={303}
        alt="Клавиатура"
        draggable={false}
      />
      <Button
        className={styles.gameStartButton}
        onClick={() => dispatch(setStatus(GameStatus.IN_PROGRESS))}>
        ПОНЯЛ, ПОГНАЛИ!
      </Button>
    </div>
  )
}
