import * as renderer from 'react-test-renderer'
import { ForumNewPost } from './forumNewPost'
import { MemoryRouter } from 'react-router-dom'

describe(`<ForumNewPost/> snapshot test cases`, () => {
  test(`<ForumNewPost/> should render <div className=forum> with child elements`, () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/forum-new-post`]}>
          <ForumNewPost />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
