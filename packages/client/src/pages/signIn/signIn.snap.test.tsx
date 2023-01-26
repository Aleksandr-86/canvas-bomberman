import * as renderer from 'react-test-renderer'
import { SignIn } from './signIn'

describe(`Snapshot test page SignIn`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<SignIn />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
