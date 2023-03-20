import * as renderer from 'react-test-renderer'
import { Landing } from './landing'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    isAuth: true,
    user: {
      displayName: `mockDisplayName`,
      login: `mockLogin`,
      firstName: `mockFirstName`,
      secondName: `mockSecondName`,
      email: `mockEmail`,
      phone: 8900000000,
    },
  },
  theme: {
    current: `mockLight`,
  },
})

describe(`<Landing/> snapshot test cases`, () => {
  test(`<Landing/> should render <div className=landing> parent with child elements (AUTH)`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/`]}>
            <Landing />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Landing/> should render <div className=landing> parent with child elements (NO_AUTH)`, () => {
    const store = mockStore({
      user: { isAuth: false, user: { id: 1 } },
      theme: { current: `light` },
    })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/`]}>
            <Landing />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
