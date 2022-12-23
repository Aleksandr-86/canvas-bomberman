import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { AppRouting } from '../pages'
import { withProviders } from './providers'
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
      <NavLink to="/" children="home" className={styles.navLink} /> {' | '}
      <NavLink to="/sign-in" children="signin" /> {' | '}
      <NavLink to="/game" children="game" /> {' | '}
      <NavLink to="/forum" children="forum" />
      <AppRouting />
    </>
  )
})

export { App }
