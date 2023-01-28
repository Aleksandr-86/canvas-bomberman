import * as renderer from 'react-test-renderer'
import { SignUp } from './signUp'

describe(`<SignUp/> snapshot test cases`, () => {
  test(`<SignUp/> should render <h2>SignUp page</h2>`, () => {
    const tree = renderer.create(<SignUp />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
