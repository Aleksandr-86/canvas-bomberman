import { useAppSelector } from '../../store/hooks'
import gameScore from './gameScore.module.css'
// import { selectGameStats } from '../../store/selectors'

// TODO: merge from game branch
export const GameScore = () => {
  // const { score, timeLeft } = useAppSelector(selectGameStats)

  return (
    <div className={gameScore.panel}>
      <span>Time Left: 12</span>
      <span>Score: 122</span>
    </div>
  )
}
