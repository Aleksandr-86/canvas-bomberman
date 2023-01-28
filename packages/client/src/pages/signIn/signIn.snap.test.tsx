import * as renderer from 'react-test-renderer'
import { SignIn } from './signIn'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<SignIn/> snapshot test cases`, () => {
  test(`<SignIn/> should render <h2>SignIn page</h2>`, () => {
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
