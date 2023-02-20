import { App } from './app'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { userReducer } from '../store/userSlice'
import { playersStatsReducer } from '../store/playersStatsSlice'
import { gameReducer } from '../store/gameSlice'

const appContent = 'Есть вопросы?'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

const mockStore = configureStore()
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
})

test('Example test', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
  expect(screen.getByText(appContent, { exact: false })).toBeDefined()
})
