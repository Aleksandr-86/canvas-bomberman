import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Table } from '../../components/table/table'
import { Button } from '../../components/button/button'

import styles from './leaderboard.module.css'

// Заглушка
const tableData = [
  {
    id: 1,
    place: 1,
    name: 'Bionic',
    score: 27500,
    games: 10,
    totalTime: 61,
  },
  {
    id: 2,
    place: 2,
    name: 'Chrome Road',
    score: 15150,
    games: 5,
    totalTime: 36,
  },
  {
    id: 3,
    place: 3,
    name: 'Bladewatch',
    score: 13500,
    games: 4,
    totalTime: 30,
  },
  {
    id: 4,
    place: 4,
    name: 'Marshmallow',
    score: 12100,
    games: 3,
    totalTime: 23,
  },
  {
    id: 5,
    place: 5,
    name: 'Arctic Realm',
    score: 9800,
    games: 3,
    totalTime: 19,
  },
]

export const Leaderboard = () => {
  const displayName = 'Алекс'
  const [isAuth, setIsAuth] = useState(true)

  // Навигационная панель
  const NavBarLogged = () => (
    <div className={styles['leaderboard__nav-bar']}>
      <img
        src="src/assets/images/avatar.png"
        alt="user-avatar"
        draggable="false"
      />
      <Link className={styles.leaderboard__link} to="/profile">
        {displayName}
      </Link>
      <Link
        className={styles.leaderboard__link}
        to="/"
        onClick={() => setIsAuth(false)}>
        Выйти
      </Link>
    </div>
  )

  const navBar = isAuth ? <NavBarLogged /> : null

  return (
    <div className={styles.leaderboard}>
      {navBar}

      <div className={styles.leaderboard__wrapper}>
        <Table caption="Таблица лидеров" userStats={tableData} />

        <Link to="/">
          <Button className={styles.leaderboard__button}>На главную</Button>
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
