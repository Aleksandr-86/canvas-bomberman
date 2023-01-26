import * as renderer from 'react-test-renderer'
import { Profile } from './profile'

describe(`Snapshot test page Profile`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<Profile />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
