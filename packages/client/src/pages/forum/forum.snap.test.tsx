import * as renderer from 'react-test-renderer'
import { Forum } from './forum'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const FORUM_DATA = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      author: 'Kan',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      author: 'sasha',
      body: 'Как создать новую тему',
      date: '8.01.22',
    },
  ],
  redirect: true,
}

const mockStore = configureStore([])
const store = mockStore({
  forum: {
    posts: FORUM_DATA,
  },
})

describe(`<Forum/> snapshot test cases`, () => {
  test(`<Forum/> should render <div className=forum> parent with child elemets`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/forum`]}>
            <Forum />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
