import * as renderer from 'react-test-renderer'
import { Avatar } from './avatar'

const mockSrc = `mockSrc.png`

describe(`<Avatar/> snapshot test cases`, () => {
  test(`<Avatar/> should render <img> with className profileImgMedium (default)`, () => {
    const tree = renderer.create(<Avatar src={mockSrc} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Avatar/> should render <img> with className profileImgSmall (size Small)`, () => {
    const tree = renderer.create(<Avatar src={mockSrc} size="Small" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Avatar/> should render <img> with className profileImgMedium (size Medium)`, () => {
    const tree = renderer
      .create(<Avatar src={mockSrc} size="Medium" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Avatar/> should render <img> with className profileImgLarge (size Large)`, () => {
    const tree = renderer.create(<Avatar src={mockSrc} size="Large" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<Avatar/> should render <img> with className profileImgLarge (size Gargantuan)`, () => {
    const tree = renderer
      .create(<Avatar src={mockSrc} size="Gargantuan" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
