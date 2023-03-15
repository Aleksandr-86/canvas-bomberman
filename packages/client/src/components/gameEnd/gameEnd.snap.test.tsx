import * as renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { GameEnd } from './gameEnd'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({ game: { currentScore: 100 } })

describe(`<GameEnd/> snapshot test cases`, () => {
  test(`<GameEnd/> should render <div className=gameEnd> parent with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameEnd restartGame={() => undefined} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
