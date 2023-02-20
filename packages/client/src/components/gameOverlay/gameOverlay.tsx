import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { GameStart } from '../gameStart/gameStart'
import { GameEnd } from '../gameEnd/gameEnd'
import { GameStatus } from '../../store/reducers/gameSlice'
import { getGameStatus } from '../../store/selectors'
import styles from './gameOverlay.module.css'

interface Props {
  onReloadGame: () => void
}

export const GameOverlay: React.FC<Props> = props => {
  const { onReloadGame } = props
  const status = useAppSelector(getGameStatus)
  const shouldRenderOverlay =
    status === GameStatus.START || status === GameStatus.END

  return shouldRenderOverlay ? (
    <div className={styles.gameOverlay}>
      {status === GameStatus.START && <GameStart />}
      {status === GameStatus.END && <GameEnd onReloadGame={onReloadGame} />}
    </div>
  ) : null
}
