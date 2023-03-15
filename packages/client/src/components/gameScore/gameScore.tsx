import { useAppSelector } from '../../store/hooks'
import gameScore from './gameScore.module.css'
import { selectGameStats } from '../../store/selectors'

export const GameScore = () => {
  const { score, timeLeft } = useAppSelector(selectGameStats)

  return (
    <div className={gameScore.panel}>
      <span>Оставшееся время: {timeLeft}</span>
      <span>Очки: {score}</span>
    </div>
  )
}
