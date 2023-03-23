import { Button } from '../../components/button/button'
import { Link, useParams } from 'react-router-dom'
import { Input } from '../../components/input/input'
import { FormEvent } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { sendMessage } from '../../store/forumSlice'
import styles from './forumNewMessage.module.css'
import baseStyles from '../../app/app.module.css'

export const ForumNewMessage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(evt.currentTarget)
    dispatch(sendMessage(formData))
  }

  return (
    <div className={styles.forum}>
      <div className={styles.forumWrapper}>
        <h2 className={styles.forumTitle}>Новое сообщение</h2>

        <form className={styles.form} onSubmit={evt => handleSubmit(evt)}>
          <Input name={id} value={id} type="hidden" />
          <textarea className={styles.textArea} />

          <Button className={styles.button} type="submit">
            сохранить
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
