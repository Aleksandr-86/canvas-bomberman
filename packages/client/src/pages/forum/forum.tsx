import { Link } from 'react-router-dom'
import classes from './forum.module.css'
import { Table } from '../../components/table/table'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getPosts } from '../../store/selectors'

export const Forum = () => {
  const posts = useAppSelector(getPosts)
  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Форум</h2>
      <Table {...posts}/>
      <div className={classes.forumWrapper}>
        <Link to="/forum-new-post" className={classes.forumLink}>
          Создать тему
        </Link>
        <Link to="/" className={classes.forumLink}>
          на главную
        </Link>
      </div>
    </div>
  )
}
