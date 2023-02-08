import { MemoryRouter } from 'react-router-dom'
import * as renderer from 'react-test-renderer'
import { SignUp } from './signUp'

describe(`<SignUp/> snapshot test cases`, () => {
  test(`<SignUp/> should render <form className=signUp> parent with child elements`, () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/signUp`]}>
          <SignUp />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
