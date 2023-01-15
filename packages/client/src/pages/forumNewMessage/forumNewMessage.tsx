import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import classes from './forumNewMessage.module.css'
import { Input } from '../../components/input/input'

export const ForumNewMessage = () => {
  return (
    <div className={classes.forum}>
      <h2 className={classes.forum__title}>Новое сообщение</h2>

      <div className={classes.forum__wrapper}>
        <form>
          <Input type="text" placeholder="Введите сообщение" />
          <Button type="submit" className="forum__btn--create">
            сохранить
          </Button>
        </form>
        <Link to="/forum" className={classes.forum__link}>
          назад
        </Link>
      </div>
    </div>
  )
}
