import * as renderer from 'react-test-renderer'
import { Leaderboard } from './leaderboard'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({
  user: { isAuth: true },
  playersStats: [
    {
      id: 1,
      place: 1,
      name: `Alex`,
      score: 811,
      games: 1,
      totalTime: 23,
    },
  ],
})

describe(`Snapshot test page Leaderboard`, () => {
  test(`Should correct render (with store)`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/leaderboard`]}>
            <Leaderboard />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
