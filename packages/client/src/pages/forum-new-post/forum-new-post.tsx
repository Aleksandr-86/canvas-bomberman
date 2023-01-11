import { Button } from "../../components/button/button"
import { Link } from "react-router-dom"
import classes from './forum-new-post.module.css'
import { Input } from "../../components/input/input"

export const ForumNewPost = () => {
  return (<div className={classes.forum}>
    <h2 className={classes.forum__title}>Новая тема</h2>

    <div className={classes.forum__wrapper}>
      <form>
        <Input type='text' placeholder='Название темы' />
        <Button type='submit' title='создать тему' class='forum__btn--create' />
      </form>
      <Link to='/forum' className={classes.forum__link}>назад</Link>

    </div>
  </div>)
}