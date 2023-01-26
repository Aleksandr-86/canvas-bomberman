import * as renderer from 'react-test-renderer'
import { ForumNewPost } from './forumNewPost'
import { MemoryRouter } from 'react-router-dom'

describe(`Snapshot test page ForumNewPost`, () => {
  test(`Should correct render (without props)`, () => {
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
