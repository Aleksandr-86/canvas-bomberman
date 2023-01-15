import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import classes from './forumNewMessage.module.css'
import { Input } from '../../components/input/input'

export const ForumNewMessage = () => {
  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Новое сообщение</h2>

      <div className={classes.forumWrapper}>
        <form>
          <Input type="text" placeholder="Введите сообщение" />
          <Button type="submit" className="forumBtnCreate">
            сохранить
          </Button>
        </form>
        <Link to="/forum" className={classes.forumLink}>
          назад
        </Link>
      </div>
    </div>
  )
}
