import * as renderer from 'react-test-renderer'
import { FormField } from './formField'

const mockProps = {
  name: `mockName`,
  value: `mockValue`,
}

const onChangeMock = () => undefined

describe(`<FormField/> snapshot test cases`, () => {
  test(`<FormField/> should render <input> with type text (default)`, () => {
    const tree = renderer
      .create(
        <FormField {...mockProps} type={'text'} onChange={onChangeMock} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<FormField/> should render <input> with type password (type password)`, () => {
    const tree = renderer
      .create(
        <FormField {...mockProps} type={'password'} onChange={onChangeMock} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<FormField/> should render <input> with type email (type email)`, () => {
    const tree = renderer
      .create(
        <FormField {...mockProps} type={'email'} onChange={onChangeMock} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<FormField/> should render <input> with type tel (type tel)`, () => {
    const tree = renderer
      .create(<FormField {...mockProps} type={'tel'} onChange={onChangeMock} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<FormField/> should render <div className=field}> with childrenElement`, () => {
    const tree = renderer
      .create(
        <FormField {...mockProps} type={'tel'} onChange={onChangeMock}>
          {<div>childrenElement</div>}
        </FormField>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`<FormField/> should render <div className=field}> with mockErrorText (disabled FALSE)`, () => {
    const tree = renderer
      .create(
        <FormField
          {...mockProps}
          type={'tel'}
          onChange={onChangeMock}
          disabled={false}
          error="mockErrorText"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
