import * as renderer from 'react-test-renderer'
import { ErrorStub } from './errorStub'

describe(`<ErrorStub/> snapshot test cases`, () => {
  test(`<ErrorStub/> should render <div className=errorStub> parent with child elements`, () => {
    const tree = renderer.create(<ErrorStub />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
