import { Button } from '../../components/button/button'
import { Link } from 'react-router-dom'
import { Input } from '../../components/input/input'
import { useAppDispatch } from '../../store/hooks'
import { FormEvent } from 'react'
import { sendPost } from '../../store/forumSlice'
import styles from './forumNewPost.module.css'
import baseStyles from '../../app/app.module.css'

export const ForumNewPost = () => {
  const dispatch = useAppDispatch()
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(evt.currentTarget)
    dispatch(sendPost(formData))
  }
  return (
    <div className={styles.forum}>
      <div className={styles.forumWrapper}>
        <h2 className={styles.forumTitle}>Новая тема</h2>

        <form className={styles.form} onSubmit={evt => handleSubmit(evt)}>
          <Input
            className={styles.input}
            type="text"
            name="body"
            placeholder="Название темы"
          />
          <Button className={styles.button} type="submit">
            создать тему
          </Button>
        </form>
        <Link
          to="/forum"
          className={`${baseStyles.linkButton} ${styles.button}`}>
          назад
        </Link>
      </div>
    </div>
  )
}
