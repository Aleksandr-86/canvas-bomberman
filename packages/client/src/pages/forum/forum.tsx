import { Link } from 'react-router-dom'
import { Table } from '../../components/table/table'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getPosts as getAll } from '../../store/forumSlice'
import { getPosts } from '../../store/selectors'
import { useEffect } from 'react'
import styles from './forum.module.css'
import baseStyles from '../../app/app.module.css'

export const Forum = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAll)
  }, [])
  const posts = useAppSelector(getPosts)
  return (
    <div className={styles.forum}>
      <div className={styles.forumWrapper}>
        <h2 className={styles.forumTitle}>Форум</h2>
        <Table {...posts} />

        <div className={styles.buttonWrapper}>
          <Link to="/forum-new-post" className={baseStyles.linkButton}>
            Создать тему
          </Link>
          <Link to="/" className={baseStyles.linkButton}>
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}
