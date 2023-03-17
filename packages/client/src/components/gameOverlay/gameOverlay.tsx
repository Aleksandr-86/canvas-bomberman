import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { GameStart } from '../gameStart/gameStart'
import { GameEnd } from '../gameEnd/gameEnd'
import { GameStatus } from '../../store/gameSlice'
import { getGameStatus } from '../../store/selectors'
import styles from './gameOverlay.module.css'

interface Props {
  startGame: () => void
}

export const GameOverlay: React.FC<Props> = ({ startGame }) => {
  const status = useAppSelector(getGameStatus)
  const shouldRenderOverlay =
    status === GameStatus.START || status === GameStatus.END

  return shouldRenderOverlay ? (
    <div className={styles.gameOverlay}>
      {status === GameStatus.START && <GameStart startGame={startGame} />}
      {status === GameStatus.END && <GameEnd restartGame={startGame} />}
    </div>
  ) : null
}
