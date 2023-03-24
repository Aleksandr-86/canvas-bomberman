import { TableRow } from '../tableRow/tableRow'
import React from 'react'
import styles from './table.module.css'

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
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} className={styles.tableTitle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {rows.map(item => (
            <TableRow
              id={item.id}
              key={item.id}
              author={item.author}
              body={item.body}
              date={item.date}
              likes={item?.likes}
              dislikes={item?.dislikes}
              redirect={!!props.redirect}
            />
          ))}
        </tbody>
      </table>
    )
  } else {
    return <h1>Сообщения отсутствуют</h1>
  }
}
