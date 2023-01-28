import * as renderer from 'react-test-renderer'
import { Table } from './table'

const mockProps = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      author: 'sasha85',
      body: 'Как создать новую тему',
      date: '8.01.22',
    },
  ],
}

describe(`<Table/> snapshot test cases`, () => {
  test(`<Table/> should render <table className=table> parent with child elements (with mockProps)`, () => {
    const tree = renderer.create(<Table {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
