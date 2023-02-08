import * as renderer from 'react-test-renderer'
import { UploadCard } from './uploadCard'

describe(`<UploadCard/> snapshot test cases`, () => {
  test(`<UploadCard/> should render <Modal/> component with child <form> elements`, () => {
    const tree = renderer.create(<UploadCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
