import { Button } from '../../components/button/button'
import { Link, useParams } from 'react-router-dom'
import classes from './forumNewMessage.module.css'
import { Input } from '../../components/input/input'
import { FormEvent } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { sendMessage } from '../../store/forumSlice'

export const ForumNewMessage = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch()
  const handleSubmit = (evt: FormEvent<HTMLFormElement> ) => {
    const formData = new FormData(evt.currentTarget)
    dispatch(sendMessage(formData))
  }

  return (
    <div className={classes.forum}>
      <h2 className={classes.forumTitle}>Новое сообщение</h2>

      <div className={classes.forumWrapper}>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <Input name={id} value={id} type="hidden"/>
          <Input name='body' type="text" placeholder="Введите сообщение" />
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
