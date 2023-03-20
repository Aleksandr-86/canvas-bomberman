import * as renderer from 'react-test-renderer'
import { ForumNewMessage } from './forumNewMessage'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<ForumNewMessage/> snapshot test cases`, () => {
  test(`<ForumMessages/> should render <div className=forum> with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/forum-new-message`]}>
            <ForumNewMessage />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
