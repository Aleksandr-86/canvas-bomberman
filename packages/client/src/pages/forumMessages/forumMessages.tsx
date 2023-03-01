import { Link, useParams } from 'react-router-dom'
import classes from './forumMessages.module.css'
import { Table } from '../../components/table/table'
import { getMessages } from '../../store/selectors'
import { getMessages as getAll } from '../../store/forumSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useEffect } from 'react'

export const ForumMessages: React.FC = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAll(id))
  }, []) 
  const messages = useAppSelector(getMessages)

  return (
    <div className={classes.forum}>
      <Table {...messages} />
      <div className={classes.forumWrapper}>
        <Link to={`/forum-new-message/${id}`} className={classes.forumLink}>
          Создать сообщение
        </Link>
        <Link to="/" className={classes.forumLink}>
          назад
        </Link>
      </div>
    </div>
  )
}
