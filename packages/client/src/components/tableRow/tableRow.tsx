import classes from './tableRow.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { sendDislike, sendLike } from '../../store/forumSlice'

export interface Post {
  id: number
  author: string
  body: string
  date: string
  likes?: number
  dislikes?: number
  redirect?: boolean | null
}

export const TableRow: React.FC<Post> = (props: Post) => {
  const navigate = useNavigate()
  const handleRedirect = (id: number) => {
    navigate(`/forum/${id}`)
  }
  const dispatch = useAppDispatch()

  const incrementLike = (id: number) => {
    dispatch(sendLike(id))
  }

  const incrementDislike = (id: number) => {
    dispatch(sendDislike(id))
  }

  return (
    <tr className={classes.tableItem} onClick={props.redirect? () => handleRedirect(props.id): undefined}>
      <td className={classes.tableRow}>{props.author}</td>
      <td className={classes.tableRow}>{props.body}</td>
      <td className={classes.tableRow}>{props.date}</td>
      {props.likes && <td onClick={() => incrementLike(props.id)} className={classes.tableRow}>{props.likes}</td>}
      {props.dislikes && <td onClick={() => incrementDislike(props.id)} className={classes.tableRow}>{props.dislikes}</td>}
    </tr>
  )
}
