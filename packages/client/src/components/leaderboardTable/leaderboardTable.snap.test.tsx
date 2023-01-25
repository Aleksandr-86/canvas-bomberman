import * as renderer from 'react-test-renderer'
import { LeaderboardTable } from './leaderboardTable'

import { type PlayerStats } from '../../store/playersStatsSlice'

const mockProps: PlayerStats[] = [
  {
    id: 1,
    place: 1,
    name: `Alex`,
    score: 811,
    games: 1,
    totalTime: 23,
  },
]

describe(`Snapshot test component LeaderboardTable`, () => {
  test(`Should correct render (with props)`, () => {
    const tree = renderer
      .create(<LeaderboardTable playersStats={mockProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
