import * as renderer from 'react-test-renderer'
import { Profile } from './profile'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    displayName: `mockDisplayName`,
    login: `mockLogin`,
    firstName: `mockFirstName`,
    secondName: `mockSecondName`,
    email: `mockEmail`,
    phone: 8900000000,
  },
})

describe(`<Profile/> snapshot test cases`, () => {
  test(`<Profile/> should render form with data user and buttons for edit avatar`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
