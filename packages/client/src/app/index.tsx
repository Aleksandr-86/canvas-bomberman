import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { AppRouting } from '../pages'
import { withProviders } from '../hocs/withProviders'
import styles from './app.module.css'

const App = withProviders(() => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>{' '}
      {' | '}
      <NavLink to="/sign-in">SignIn</NavLink> {' | '}
      <NavLink to="/game">Game</NavLink> {' | '}
      <NavLink to="/forum">Forum</NavLink>
      <AppRouting />
    </>
  )
})

export { App }
