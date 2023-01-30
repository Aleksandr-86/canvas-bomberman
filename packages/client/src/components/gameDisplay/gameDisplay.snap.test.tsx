import * as renderer from 'react-test-renderer'
import { GameDisplay } from './gameDisplay'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { GameStatus } from '../../store/gameSlice'

const mockStore = configureStore([])

describe(`<GameDisplay/> snapshot test cases`, () => {
  test(`<GameDisplay/> should render <div className=gameDisplay> parent with <GameStart/> child component (status=START)`, () => {
    const store = mockStore({ game: { status: GameStatus.START } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameDisplay />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<GameDisplay/> should render <div className=gameDisplay> parent with <GameEND/> child component (status=END)`, () => {
    const store = mockStore({ game: { status: GameStatus.END } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameDisplay />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<GameDisplay/> should render <div className=gameDisplay> parent with child elements (status=IN_PROGRESS)`, () => {
    const store = mockStore({ game: { status: GameStatus.IN_PROGRESS } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <GameDisplay />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
