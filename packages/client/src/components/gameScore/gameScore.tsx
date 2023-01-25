import { getCurrentScore, selectTime } from '../../store/selectors'
import { useAppSelector } from '../../store/hooks'

export const GameScore = () => {
  const score = useAppSelector(getCurrentScore)
  const time = useAppSelector(selectTime)

  return (
    <p>
      Score: {score} | Time left: {Math.trunc(time)}
    </p>
  )
}
