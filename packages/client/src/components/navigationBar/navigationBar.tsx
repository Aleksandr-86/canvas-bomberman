import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import avatarImg from '../../assets/images/avatar.png'

import styles from './navigationBar.module.css'
import { logout } from '../../store/actions/userActions'

export const NavigationBar = () => {
  const dispatch = useAppDispatch()
  const { login, displayName } = useAppSelector(getUser).user

  return (
    <nav className={styles.navigationBar}>
      <img src={avatarImg} alt="user-avatar" draggable="false" />
      <Link className={styles.link} to="/profile">
        {displayName || login}
      </Link>
      <Link className={styles.link} to="/" onClick={() => dispatch(logout())}>
        Выйти
      </Link>
    </nav>
  )
}
