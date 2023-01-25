import * as renderer from 'react-test-renderer'
import { ErrorBoundary } from './errorBoundary'

const mockChildrenElement = <div>mockChildrenElement</div>

describe(`Snapshot test component ErrorBoundary`, () => {
  test(`Should correct render (with props)`, () => {
    const tree = renderer
      .create(<ErrorBoundary>{mockChildrenElement}</ErrorBoundary>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
