import * as renderer from 'react-test-renderer'
import { ForumNewMessage } from './forumNewMessage'
import { MemoryRouter } from 'react-router-dom'

describe(`Snapshot test page ForumNewMessage`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/forum-new-message`]}>
          <ForumNewMessage />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
