import * as renderer from 'react-test-renderer'
import { TableRow } from './tableRow'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({})

const mockProps = {
  id: 1,
  author: `Kan88`,
  body: `Как пройти первый уровень`,
  date: `8.01.22'.`,
}

describe(`<TableRow/> snapshot test cases`, () => {
  test(`<TableRow/> should render <tr> parent with <td className=tableRow> childs (with mockProps)`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/forum`]}>
            <TableRow {...mockProps} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
