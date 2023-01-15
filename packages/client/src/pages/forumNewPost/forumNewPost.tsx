import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import classes from './forumNewPost.module.css'
import { Input } from '../../components/input/input'

export const ForumNewPost = () => {
  return (
    <div className={classes.forum}>
      <h2 className={classes.forum__title}>Новая тема</h2>

      <div className={classes.forum__wrapper}>
        <form>
          <Input type="text" placeholder="Название темы" />
          <Button
            type="submit"
            className="forum__btn--create">создать тему</Button>
        </form>
        <Link to="/forum" className={classes.forum__link}>
          назад
        </Link>
      </div>
    </div >
  )
}
