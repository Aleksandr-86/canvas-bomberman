import { useAppSelector } from '../../store/hooks'
import gameScore from './gameScore.module.css'
import bombermanAtlas from '../../assets/images/nesBomberman3x.json'
import { selectActiveBuffList, selectGameStats } from '../../store/selectors'

export const GameScore = () => {
  const { score, timeLeft } = useAppSelector(selectGameStats)
  const activeBuffList = useAppSelector(selectActiveBuffList)

  return (
    <div className={gameScore.panel}>
      <span>Time Left: {timeLeft}</span>
      <span>Score: {score}</span>
      {activeBuffList.map(buffName => {
        const { x, y } =
          bombermanAtlas.entries[
            buffName as keyof typeof bombermanAtlas.entries
          ]
        const key = `${x}${y}`
        const backgroundPosition = `${-x * 48}px ${-y * 48}px`

        return (
          <div
            key={key}
            className={gameScore.buffTile}
            style={{
              backgroundPosition,
            }}></div>
        )
      })}
    </div>
  )
}
