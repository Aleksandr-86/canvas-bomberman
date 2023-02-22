import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import * as renderer from 'react-test-renderer'
import { SignUp } from './signUp'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<SignUp/> snapshot test cases`, () => {
  test(`<SignUp/> should render <form className=signUp> parent with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/signUp`]}>
            <SignUp />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
