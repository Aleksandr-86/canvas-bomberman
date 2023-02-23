import { useAppSelector } from '../../store/hooks'
import gameScore from './gameScore.module.css'
import { selectGameStats } from '../../store/selectors'

export const GameScore = () => {
  const { score, timeLeft } = useAppSelector(selectGameStats)

  return (
    <div className={gameScore.panel}>
      <span>Time Left: {timeLeft}</span>
      <span>Score: {score}</span>
    </div>
  )
}
