import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  getLeaderboardState,
  getUser,
  isFirstPage,
  isLastPage,
  isLeaderboardLoading,
} from '../../store/selectors'
import { NavigationBar } from '../../components/navigationBar/navigationBar'
import { LeaderboardTable } from '../../components/leaderboardTable/leaderboardTable'
import heroImg from '../../assets/images/hero.png'
import baseStyles from '../../app/app.module.css'
import styles from './leaderboard.module.css'
import { Button } from '../../components/button/button'
import { nextPage, previousPage } from '../../store/reducers/leaderboardSlice'
import { leaderboardThunks } from '../../store/actions/leaderboardThunks'
import { useEffect } from 'react'
import { ActivityIndicator } from '../../components/activityIndicator/activityIndicator'

export const Leaderboard = () => {
  const userState = useAppSelector(getUser)
  const leaderboardState = useAppSelector(getLeaderboardState)
  const isLoading = useAppSelector(isLeaderboardLoading)
  const isFirst = useAppSelector(isFirstPage)
  const isLast = useAppSelector(isLastPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(leaderboardThunks.setLeadersStatsState())
  }, [])

  const leaderboard = (
    <div className={styles.container}>
      <div className={styles.tableCaption}>Таблица лидеров</div>
      <LeaderboardTable state={leaderboardState} />

      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => dispatch(previousPage())}
          className={isFirst ? styles.dimmed : ''}>
          &lt;{' '}
        </Button>
        <Button
          onClick={() => dispatch(nextPage())}
          className={isLast ? styles.dimmed : ''}>
          &gt;
        </Button>
        <Link className={baseStyles.linkButton} to="/">
          На главную
        </Link>
      </div>
      <img
        className={styles.heroImg}
        src={heroImg}
        alt="hero-img"
        draggable="false"
      />
    </div>
  )

  const navBar = userState.isAuth ? <NavigationBar /> : null
  const pageContent = isLoading ? <ActivityIndicator /> : leaderboard

  return (
    <div className={styles.leaderboard}>
      {navBar}

      {pageContent}
    </div>
  )
}
