import * as renderer from 'react-test-renderer'
import { SignUp } from './signUp'

describe(`Snapshot test page SignUp`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<SignUp />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
