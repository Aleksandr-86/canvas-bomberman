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
  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboard__wrapper}>
        <Table caption="Таблица лидеров" userStats={tableData} />
        <Link to="/">
          <Button class={styles.leaderboard__button} title="На главную" />
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
