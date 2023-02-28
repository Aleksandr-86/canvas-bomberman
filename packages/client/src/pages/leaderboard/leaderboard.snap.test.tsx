import * as renderer from 'react-test-renderer'
import { Leaderboard } from './leaderboard'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    isAuth: true,
    user: {
      displayName: `mockDisplayName`,
      login: `mockLogin`,
      firstName: `mockFirstName`,
      secondName: `mockSecondName`,
      email: `mockEmail`,
      phone: 8900000000,
    },
  },
  leaderboard: {
    isLoading: false,
    stats: [
      {
        id: 1,
        place: 1,
        name: `Alex`,
        score: 811,
        games: 1,
      },
    ],
    page: 0,
  },
})

describe(`<Leaderboard/> snapshot test cases`, () => {
  test(`<Leaderboard/> should render <div className=leaderboard> parent with child elements (with store)`, () => {
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
