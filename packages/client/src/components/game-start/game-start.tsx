import { Button } from '../button/button'

import styles from './game-start.module.css'

import keyboard from '../../assets/images/keyboard.png'

interface Props {
  onButtonClick: () => void
}

export const GameStart = (props: Props) => {
  const { onButtonClick } = props

  return (
    <div className={styles.gameStart}>
      <p className={styles.gameStart__text}>Куда жать, чтобы было весело?!</p>
      <img
        src={keyboard}
        width={720}
        height={303}
        alt="Клавиатура"
        draggable={false}
      />
      <Button onButtonClick={onButtonClick}>ПОНЯЛ, ПОГНАЛИ!</Button>
    </div>
  )
}
