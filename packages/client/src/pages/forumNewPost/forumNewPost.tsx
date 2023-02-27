import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import classes from './forumNewPost.module.css'
import { Input } from '../../components/input/input'
import { useAppDispatch } from '../../store/hooks'
import { FormEvent } from 'react'
import { sendPost } from '../../store/forumSlice'

export const ForumNewPost = () => {
  const dispatch = useAppDispatch()
  const handleSubmit = (evt: FormEvent<HTMLFormElement> ) => {
    const formData = new FormData(evt.currentTarget)
    dispatch(sendPost(formData))
  }
  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Новая тема</h2>

      <div className={classes.forumWrapper}>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <Input type="text" name='body' placeholder="Название темы" />
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
