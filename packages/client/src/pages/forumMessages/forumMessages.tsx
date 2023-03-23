import { Link, useParams } from 'react-router-dom'
import { Table } from '../../components/table/table'
import { getMessages } from '../../store/selectors'
import { getMessages as getAll } from '../../store/forumSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useEffect } from 'react'
import styles from './forumMessages.module.css'
import baseStyles from '../../app/app.module.css'

export const ForumMessages: React.FC = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAll(id))
  }, [])
  const messages = useAppSelector(getMessages)

  return (
    <div className={styles.forum}>
      <div className={styles.forumWrapper}>
        <Table {...messages} />
        <div className={styles.buttonWrapper}>
          <Link
            to={`/forum-new-message/${id}`}
            className={baseStyles.linkButton}>
            Создать сообщение
          </Link>
          <Link to="/" className={baseStyles.linkButton}>
            назад
          </Link>
        </div>
      </div>
    </div>
  )
}
