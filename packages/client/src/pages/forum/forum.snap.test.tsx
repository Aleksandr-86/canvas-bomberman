import * as renderer from 'react-test-renderer'
import { Forum } from './forum'
import { MemoryRouter } from 'react-router-dom'

describe(`Snapshot test page Forum`, () => {
  test(`Should correct render (without props)`, () => {
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
