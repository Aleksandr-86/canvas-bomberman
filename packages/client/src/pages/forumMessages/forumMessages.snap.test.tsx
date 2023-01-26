import * as renderer from 'react-test-renderer'
import { ForumMessages } from './forumMessages'
import { MemoryRouter } from 'react-router-dom'

describe(`Snapshot test page ForumMessages`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/forum-messages`]}>
          <ForumMessages />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
