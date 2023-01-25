import * as renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { GameStart } from './gameStart'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({})

describe(`Snapshot test component GameStart`, () => {
  test(`Should correct render (with store)`, () => {
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
