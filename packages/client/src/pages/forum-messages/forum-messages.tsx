import { Link } from "react-router-dom"
import classes from './forum-messages.module.css'
import { Table } from "../../components/table/table"
const ForumPostData = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      postid: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22'
    }, {
      id: 2,
      postid: 1,
      author: 'sasha85',
      body: 'Я прошел на изи, надо лишь быстро двигать пальцами',
      date: '8.01.22'
    },
    {
      id: 3,
      postid: 2,
      author: 'Kan88',
      body: 'Подскажите пожалуйста как пройти второй уровень',
      date: '8.01.22'
    }, {
      id: 4,
      postid: 2,
      author: 'sasha85',
      body: 'Я еще не прошел',
      date: '8.01.22'
    },
  ]
}
export const ForumMessages = () => {


  return (<div className={classes.forum}>
    <Table posts={ForumPostData} />
    <div className={classes.forum__wrapper}>
      <Link to='/forum-new-message' className={classes.forum__link}>Создать сообщение</Link>
      <Link to='/' className={classes.forum__link}>назад</Link>
    </div>
  </div>)
}
