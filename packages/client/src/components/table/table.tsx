import { TableRow } from '../tableRow/tableRow'
import classes from './table.module.css'
import React from 'react'

interface Props {
  headers: string[]
  rows: {
    id: number
    author: string
    body: string
    date: string
  }[]
}

export const Table: React.FC<Props> = props => {
  const { headers, rows } = props
  if (rows) {
    return (
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.tableTitle}>{headers[0]}</th>
            <th className={classes.tableTitle}>{headers[1]}</th>
            <th className={classes.tableTitle}>{headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <TableRow
              id={item.id}
              key={item.id}
              author={item.author}
              body={item.body}
              date={item.date}
            />
          ))}
        </tbody>
      </table>
    )
  } else {
    return <h1>Нет Постов</h1>
  }
}
