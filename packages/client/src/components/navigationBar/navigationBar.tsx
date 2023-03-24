import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'

import styles from './navigationBar.module.css'
import { logout } from '../../store/userActions'
import { Avatar } from '../avatar/avatar'

export const NavigationBar = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getUser)
  const { login, displayName } = useAppSelector(getUser).user

  return (
    <nav className={styles.navigationBar}>
      <Avatar size="Large" src={user.avatar} />

      <Link className={styles.link} to="/profile">
        {displayName || login}
      </Link>
      <Link className={styles.link} to="/" onClick={() => dispatch(logout())}>
        Выйти
      </Link>
    </nav>
  )
}
