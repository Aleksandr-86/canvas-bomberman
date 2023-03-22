import * as renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { ThemeSwitcher } from './themeSwitcher'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    isAuth: true,
    user: {
      id: 1,
    },
  },
  theme: {
    current: `mockLight`,
  },
})

describe(`<ThemeSwitcher/> snapshot test cases`, () => {
  test(`<ThemeSwitcher/> should render <label> parent`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeSwitcher />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
