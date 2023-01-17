import { useState } from 'react'

import { GameStart } from '../gameStart/gameStart'

import styles from './gameOverlay.module.css'

export const GameOverlay: React.FC = () => {
  const [isStart, setIsStart] = useState(true)

  return isStart ? (
    <div className={styles.gameOverlay}>
      <GameStart onButtonClick={() => setIsStart(false)} />
    </div>
  ) : null
}
