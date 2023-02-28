import * as renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { GameOverlay } from './gameOverlay'
import configureStore from 'redux-mock-store'
import { GameStatus } from '../../store/game/gameSlice'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe(`<GameOverlay/> snapshot test cases`, () => {
  test(`<GameOverlay/> should render <div className=gameOverlay> parent with <GameStart/> child component (status=START)`, () => {
    const store = mockStore({ game: { status: GameStatus.START } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameOverlay onReloadGame={() => undefined} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<GameOverlay/> should render <div className=gameOverlay> parent with <GameEND/> child component (status=END)`, () => {
    const store = mockStore({ game: { status: GameStatus.END } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameOverlay onReloadGame={() => undefined} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<GameOverlay/> should render null`, () => {
    const store = mockStore({ game: { status: GameStatus.IN_PROGRESS } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameOverlay onReloadGame={() => undefined} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
