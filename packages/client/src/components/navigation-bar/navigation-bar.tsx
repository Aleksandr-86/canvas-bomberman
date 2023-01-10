import { useDispatch, useSelector } from 'react-redux'
import { setAuthFalse } from '../../store/userSlice'
import { RootState } from '../../store'

import { Link } from 'react-router-dom'

import styles from './navigation-bar.module.css'

export const NavigationBar = () => {
  const dispatch = useDispatch()
  const { displayName } = useSelector((state: RootState) => state.user)

  return (
    <nav className={styles['navigation-bar']}>
      <img
        src="src/assets/images/avatar.png"
        alt="user-avatar"
        draggable="false"
      />

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
