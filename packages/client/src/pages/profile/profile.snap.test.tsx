import * as renderer from 'react-test-renderer'
import { Profile } from './profile'

describe(`<Profile/> snapshot test cases`, () => {
  test(`<Profile/> should render <div className=profile>`, () => {
    const tree = renderer.create(<Profile />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
