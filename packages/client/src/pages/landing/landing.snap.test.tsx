import * as renderer from 'react-test-renderer'
import { Landing } from './landing'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe(`<Landing/> snapshot test cases`, () => {
  test(`<Landing/> should render <div className=landing> parent with child elements (AUTH)`, () => {
    const store = mockStore({ user: { isAuth: true } })

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
    const store = mockStore({ user: { isAuth: false } })

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
