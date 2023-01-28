import * as renderer from 'react-test-renderer'
import { HeroBomb } from './heroBomb'

describe(`<HeroBomb/> snapshot test cases`, () => {
  test(`<HeroBomb/> should render <img>`, () => {
    const tree = renderer.create(<HeroBomb />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
