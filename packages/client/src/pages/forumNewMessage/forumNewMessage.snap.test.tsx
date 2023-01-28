import * as renderer from 'react-test-renderer'
import { ForumNewMessage } from './forumNewMessage'
import { MemoryRouter } from 'react-router-dom'

describe(`<ForumNewMessage/> snapshot test cases`, () => {
  test(`<ForumMessages/> should render <div className=forum> with child elements`, () => {
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
