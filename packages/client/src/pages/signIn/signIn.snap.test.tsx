import * as renderer from 'react-test-renderer'
import { SignIn } from './signIn'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<SignIn/> snapshot test cases`, () => {
  test(`<SignIn/> should render <form className=signIn> parent with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/signIn`]}>
            <SignIn />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
