import { Link, useParams } from 'react-router-dom'
import classes from './forumMessages.module.css'
import { Table } from '../../components/table/table'
import { getMessages } from '../../store/selectors'
import { useAppSelector } from '../../store/hooks'

export const ForumMessages: React.FC = () => {
  const messages = useAppSelector(getMessages)
  const { id } = useParams()
  const cb = () => console.log('cb')

  return (
    <div className={classes.forum}>
      <Table {...messages}/>
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
