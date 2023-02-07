import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as renderer from 'react-test-renderer'
import { UploadCard } from './uploadCard'

const mockStore = configureStore([])
const store = mockStore({})

describe(`<UploadCard/> snapshot test cases`, () => {
  test(`<UploadCard/> should render <Modal/> component with child <form> elements`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <UploadCard />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
