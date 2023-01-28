import * as renderer from 'react-test-renderer'
import { Button } from './button'

const mockProps = {
  children: `mockChildren`,
  className: `mockClass`,
  onClick: () => undefined,
}

describe(`<Button/> snapshot test cases`, () => {
  test(`<Button/> should render <button className=button> with text`, () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Button/> should render <button className=button mockClass> with mockProps`, () => {
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
