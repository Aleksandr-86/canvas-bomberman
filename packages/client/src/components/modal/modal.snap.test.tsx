import * as renderer from 'react-test-renderer'
import { Modal } from './modal'

describe(`<Modal/> snapshot test cases`, () => {
  test(`<Modal/> should render <div className="modal modalActive"> parent with child elements (default)`, () => {
    const tree = renderer.create(<Modal />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Modal/> should render <div className="modal modalClose"> parent with child elements (isActive false)`, () => {
    const tree = renderer.create(<Modal isActive={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Modal/> should render <div className="modal modalActive"> parent with childrenElement`, () => {
    const tree = renderer
      .create(<Modal>{<div>childrenElement</div>}</Modal>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
