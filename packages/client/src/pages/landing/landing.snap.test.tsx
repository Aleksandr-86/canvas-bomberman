import * as renderer from 'react-test-renderer'
import { Landing } from './landing'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe(`Snapshot test page Landing`, () => {
  test(`Should correct render (with store - isAuth=true)`, () => {
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

  test(`Should correct render (with store - isAuth=false)`, () => {
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
