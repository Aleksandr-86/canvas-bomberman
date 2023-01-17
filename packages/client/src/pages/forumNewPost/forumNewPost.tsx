import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import classes from './forumNewPost.module.css'
import { Input } from '../../components/input/input'

export const ForumNewPost = () => {
  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Новая тема</h2>

      <div className={classes.forumWrapper}>
        <form>
          <Input type="text" placeholder="Название темы" />
          <Button type="submit" className="forumBtnCreate">
            создать тему
          </Button>
        </form>
        <Link to="/forum" className={classes.forumLink}>
          назад
        </Link>
      </div>
    </div>
  )
}
