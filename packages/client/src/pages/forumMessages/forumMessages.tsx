import { Link } from 'react-router-dom'
import classes from './forumMessages.module.css'
import { Table } from '../../components/table/table'
const FORUM_MESSAGES = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      postid: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      postid: 1,
      author: 'sasha85',
      body: 'Я прошел на изи, надо лишь быстро двигать пальцами',
      date: '8.01.22',
    },
    {
      id: 3,
      postid: 2,
      author: 'Kan88',
      body: 'Подскажите пожалуйста как пройти второй уровень',
      date: '8.01.22',
    },
    {
      id: 4,
      postid: 2,
      author: 'sasha85',
      body: 'Я еще не прошел',
      date: '8.01.22',
    },
  ],
}
export const ForumMessages = () => {
  return (
    <div className={classes.forum}>
      <Table {...FORUM_MESSAGES} />
      <div className={classes.forumWrapper}>
        <Link to="/forum-new-message" className={classes.forumLink}>
          Создать сообщение
        </Link>
        <Link to="/" className={classes.forumLink}>
          назад
        </Link>
      </div>
    </div>
  )
}
