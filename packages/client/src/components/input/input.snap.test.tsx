import * as renderer from 'react-test-renderer'
import { Input } from './input'

const mockProps = {
  class: `mockClass`,
  placeholder: `mockPlaceholder`,
  type: `text`,
}

describe(`<Input/> snapshot test cases`, () => {
  test(`<Input/> should render <input>`, () => {
    const tree = renderer.create(<Input {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
