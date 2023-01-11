import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../store/hooks'
import { setAuthFalse } from '../../store/userSlice'
import { getUser } from '../../store/selectors'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/images/avatar.png'

import styles from './navigation-bar.module.css'

export const NavigationBar = () => {
  const dispatch = useDispatch()
  const { displayName } = useAppSelector(getUser)

  return (
    <nav className={styles['navigation-bar']}>
      <img src={avatarImg} alt="user-avatar" draggable="false" />
      <Link className={styles['navigation-bar__link']} to="/profile">
        {displayName}
      </Link>
      <Link
        className={styles['navigation-bar__link']}
        to="/"
        onClick={() => dispatch(setAuthFalse())}>
        Выйти
      </Link>
    </nav>
  )
}
