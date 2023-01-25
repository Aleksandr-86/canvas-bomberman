import * as renderer from 'react-test-renderer'
import { TableRow } from './tableRow'

const mockProps = {
  id: 1,
  author: `Kan88`,
  body: `Как пройти первый уровень`,
  date: `8.01.22'.`,
}

describe(`Snapshot test component TableRow`, () => {
  test(`Should correct render (with props)`, () => {
    const tree = renderer.create(<TableRow {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
