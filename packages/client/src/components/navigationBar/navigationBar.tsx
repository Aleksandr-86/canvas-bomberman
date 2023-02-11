import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import { setAuthFalse } from '../../store/userSlice'
import avatarImg from '../../assets/images/avatar.png'

import styles from './navigationBar.module.css'

export const NavigationBar = () => {
  const dispatch = useAppDispatch()
  const { displayName } = useAppSelector(getUser).user

  return (
    <nav className={styles.navigationBar}>
      <img src={avatarImg} alt="user-avatar" draggable="false" />
      <Link className={styles.link} to="/profile">
        {displayName}
      </Link>
      <Link
        className={styles.link}
        to="/"
        onClick={() => dispatch(setAuthFalse())}>
        Выйти
      </Link>
    </nav>
  )
}
