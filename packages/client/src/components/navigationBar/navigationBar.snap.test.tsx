import * as renderer from 'react-test-renderer'
import { NavigationBar } from './navigationBar'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])
const store = mockStore({ user: { displayName: `Alex` } })

describe(`<NavigationBar/> snapshot test cases`, () => {
  test(`<NavigationBar/> should render <nav className=navigationBar> parent with child elements (with store data)`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/`]}>
            <NavigationBar />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
