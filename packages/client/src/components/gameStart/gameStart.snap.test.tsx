import * as renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { GameStart } from './gameStart'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<GameStart/> snapshot test cases`, () => {
  test(`<GameStart/> should render <div className=gameStart> parent with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <GameStart />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
