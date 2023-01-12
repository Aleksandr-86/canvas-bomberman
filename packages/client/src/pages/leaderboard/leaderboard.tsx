import { Link } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import { getPlayersStats } from '../../store/selectors'
import { NavigationBar } from '../../components/navigationBar/navigationBar'
import { Table } from '../../components/table/table'
import heroImg from '../../assets/images/hero.png'

import baseStyles from '../../app/app.module.css'
import styles from './leaderboard.module.css'

export const Leaderboard = () => {
  const userState = useAppSelector(getUser)
  const playersStatsState = useAppSelector(getPlayersStats)

  const navBar = userState.isAuth ? <NavigationBar /> : null

  return (
    <div className={styles.leaderboard}>
      {navBar}
      <div className={styles.leaderboard__wrapper}>
        <div className={styles['leaderboard__table-caption']}>
          Таблица лидеров
        </div>
        <Table playersStats={playersStatsState} />
        <Link className={baseStyles.link_button} to="/">
          На главную
        </Link>
        <img
          className={styles['leaderboard__hero-img']}
          src={heroImg}
          alt="hero-img"
          draggable="false"
        />
      </div>
    </div>
  )
}
