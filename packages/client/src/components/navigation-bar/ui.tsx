import { NavLink } from 'react-router-dom'
import styles from './navigation-bar.module.css'

const NavigationBar = () => {
  return (
    <nav>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/sign-in">SignIn</NavLink> {' | '}
      <NavLink to="/game">Game</NavLink> {' | '}
      <NavLink to="/forum">Forum</NavLink>
    </nav>
  )
}

export { NavigationBar }
