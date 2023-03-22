import React from 'react'
import { Button } from '../button/button'
import styles from './gameStart.module.css'
import keyboard from '../../assets/images/keyboard.png'

interface Props {
  startGame: () => void
}

export const GameStart: React.FC<Props> = ({ startGame }) => {
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
      <Button className={styles.gameStartButton} onClick={startGame}>
        ПОНЯЛ, ПОГНАЛИ!
      </Button>
    </div>
  )
}
