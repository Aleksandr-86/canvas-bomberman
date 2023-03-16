import * as renderer from 'react-test-renderer'
import { ForumMessages } from './forumMessages'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const FORUM_MESSAGES = {
  headers: ['Автор', 'Сообщения', 'Дата', 'Лайки', 'Дизлайки'],
  rows: [
    {
      id: 1,
      postid: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
      likes: 150,
      dislikes: 12,
    },
    {
      id: 2,
      postid: 1,
      author: 'sasha85',
      body: 'Я прошел на изи, надо лишь быстро двигать пальцами',
      date: '8.01.22',
      likes: 2,
      dislikes: 12,
    },
  ],
}

const mockStore = configureStore([])
const store = mockStore({
  forum: {
    messages: FORUM_MESSAGES,
  },
})

describe(`<ForumMessages/> snapshot test cases`, () => {
  test(`<ForumMessages/> should render <div className=forum> with child elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/forum-messages`]}>
            <ForumMessages />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
