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
  },
]

describe(`<LeaderboardTable/> snapshot test cases`, () => {
  test(`<LeaderboardTable/> should render <table className=table> parent with child elements (with mockProps)`, () => {
    const tree = renderer
      .create(<LeaderboardTable state={mockProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
