import * as renderer from 'react-test-renderer'
import { HeroBomb } from './heroBomb'

describe(`Snapshot test component HeroBomb`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<HeroBomb />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
