import classes from './tableRow.module.css'

export interface Post {
  id: number
  author: string
  body: string
  date: string
}

export const TableRow = (props: Post) => {
  return (
    <tr>
      <td className={classes.tableRow}>{props.author}</td>
      <td className={classes.tableRow}>{props.body}</td>
      <td className={classes.tableRow}>{props.date}</td>
    </tr>
  )
}
