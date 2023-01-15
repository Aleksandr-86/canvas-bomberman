import { Link } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import { getPlayersStats } from '../../store/selectors'
import { NavigationBar } from '../../components/navigationBar/navigationBar'
import { LeaderboardTable } from '../../components/leaderboardTable/leaderboardTable'
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
      <div className={styles.wrapper}>
        <div className={styles.tableCaption}>Таблица лидеров</div>
        <LeaderboardTable playersStats={playersStatsState} />
        <Link className={baseStyles.linkButton} to="/">
          На главную
        </Link>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="hero-img"
          draggable="false"
        />
      </div>
    </div>
  )
}
