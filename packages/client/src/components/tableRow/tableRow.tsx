import classes from './tableRow.module.css'
import { useNavigate } from "react-router-dom";

export interface Post {
  id: number
  author: string
  body: string
  date: string
}

export const TableRow = (props: Post) => {
  const navigate = useNavigate();
  const handleRedirect = (id: number) => {
    navigate(`/forum/${id}`);
  }

  return (
    <tr className={classes.tableItem} onClick={() => handleRedirect(props.id)}>
      <td className={classes.tableRow}>{props.author}</td>
      <td className={classes.tableRow}>{props.body}</td>
      <td className={classes.tableRow}>{props.date}</td>
    </tr>
  )
}
