import * as renderer from 'react-test-renderer'
import { ForumMessages } from './forumMessages'
import { MemoryRouter } from 'react-router-dom'

describe(`<ForumMessages/> snapshot test cases`, () => {
  test(`<ForumMessages/> should render <div className=forum> with child elements`, () => {
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
