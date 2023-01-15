import { Link } from 'react-router-dom'
import classes from './forum.module.css'
import { Table } from '../../components/table/table'
const ForumData = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      author: 'sasha85',
      body: 'Как создать новую тему',
      date: '8.01.22',
    },
  ],
}
export const Forum = () => {
  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Форум</h2>
      <Table posts={ForumData} />
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
