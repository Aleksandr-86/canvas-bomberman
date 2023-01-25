import * as renderer from 'react-test-renderer'
import { Input } from './input'

const mockProps = {
  class: `mockClass`,
  placeholder: `mockPlaceholder`,
  type: `text`,
}

describe(`Snapshot test component Input`, () => {
  test(`Should correct render (with props)`, () => {
    const tree = renderer.create(<Input {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
