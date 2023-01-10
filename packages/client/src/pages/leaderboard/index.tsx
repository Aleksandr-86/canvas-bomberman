import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../store'
import { NavigationBar } from '../../components/navigation-bar/navigation-bar'
import { Table } from '../../components/table/table'

import baseStyles from '../../app/app.module.css'
import styles from './leaderboard.module.css'

export const Leaderboard = () => {
  const userState = useSelector((state: RootState) => state.user)
  const playersStatsState = useSelector(
    (state: RootState) => state.playersStats
  )

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
          src="src/assets/images/hero.png"
          alt="hero-img"
          draggable="false"
        />
      </div>
    </div>
  )
}
