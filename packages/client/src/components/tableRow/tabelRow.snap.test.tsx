import * as renderer from 'react-test-renderer'
import { TableRow } from './tableRow'

const mockProps = {
  id: 1,
  author: `Kan88`,
  body: `Как пройти первый уровень`,
  date: `8.01.22'.`,
}

describe(`<TableRow/> snapshot test cases`, () => {
  test(`<TableRow/> should render <tr> parent with <td className=tableRow> childs (with mockProps)`, () => {
    const tree = renderer.create(<TableRow {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
