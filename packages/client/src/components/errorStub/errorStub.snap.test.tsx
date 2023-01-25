import * as renderer from 'react-test-renderer'
import { ErrorStub } from './errorStub'

describe(`Snapshot test component ErrorStub`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<ErrorStub />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
