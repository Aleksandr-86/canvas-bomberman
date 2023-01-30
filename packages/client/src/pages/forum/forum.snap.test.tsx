import * as renderer from 'react-test-renderer'
import { Forum } from './forum'
import { MemoryRouter } from 'react-router-dom'

describe(`<Forum/> snapshot test cases`, () => {
  test(`<Forum/> should render <div className=forum> parent with child elemets`, () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/forum`]}>
          <Forum />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
