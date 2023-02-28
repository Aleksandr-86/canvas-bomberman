import { TableRow } from '../tableRow/tableRow'
import classes from './table.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  headers: string[]
  rows: {
    id: number
    author: string
    body: string
    date: string
    likes?: number
    dislikes?: number
  }[]
  redirect?: boolean
}

export const Table: React.FC<Props> = props => {
  const { headers, rows } = props
  if (rows) {
    return (
      <table className={classes.table}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} className={classes.tableTitle}>
                {header}
              </th>
            ))}
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
              likes={item?.likes}
              dislikes={item?.dislikes}
              redirect={props.redirect ? true : null}
            />
          ))}
        </tbody>
      </table>
    )
  } else {
    return <h1>Нет Постов</h1>
  }
}
