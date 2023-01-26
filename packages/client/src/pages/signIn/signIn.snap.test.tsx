import * as renderer from 'react-test-renderer'
import { SignIn } from './signIn'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const mockStore = configureStore([])
const store = mockStore({})

describe(`Snapshot test page SignIn`, () => {
  test(`Should correct render (with store)`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SignIn />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
