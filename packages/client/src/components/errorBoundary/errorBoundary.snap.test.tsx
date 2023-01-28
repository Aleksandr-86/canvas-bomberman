import * as renderer from 'react-test-renderer'
import { ErrorBoundary } from './errorBoundary'

const mockChildrenElement = <div>mockChildrenElement</div>

describe(`<ErrorBoundary/> snapshot test cases`, () => {
  test(`<ErrorBoundary/> should render <div>mockChildrenElement</div>`, () => {
    const tree = renderer
      .create(<ErrorBoundary>{mockChildrenElement}</ErrorBoundary>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
