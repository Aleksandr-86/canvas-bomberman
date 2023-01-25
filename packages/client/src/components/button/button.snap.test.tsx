import * as renderer from 'react-test-renderer'
import { Button } from './button'

const mockProps = {
  children: `mockChildren`,
  className: `mockClass`,
  onClick: () => undefined,
}

describe(`Snapshot test component Button`, () => {
  test(`Should correct render (without props)`, () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`Should correct render (with props)`, () => {
    const tree = renderer
      .create(
        <Button
          type="submit"
          className={mockProps.className}
          onClick={mockProps.onClick}>
          {mockProps.children}
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
