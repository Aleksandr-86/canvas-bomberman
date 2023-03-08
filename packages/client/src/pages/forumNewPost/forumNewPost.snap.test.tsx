import * as renderer from 'react-test-renderer'
import { ForumNewPost } from './forumNewPost'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<ForumNewPost/> snapshot test cases`, () => {
  test(`<ForumNewPost/> should render <div className=forum> with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/forum-new-post`]}>
            <ForumNewPost />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
