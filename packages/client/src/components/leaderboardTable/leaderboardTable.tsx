import React from 'react'

import { useSortableData } from '../../hooks/userSortableData'
import { PlayerStats } from '../../store/reducers/leaderboardSlice'

import styles from './leaderboardTable.module.css'

interface Props {
  state: PlayerStats[]
}

const HEADERS: { name: string; title: string }[] = [
  { name: 'place', title: 'Место' },
  { name: 'name', title: 'Имя игрока' },
  { name: 'score', title: 'Очки' },
  { name: 'games', title: 'Сыграно игр' },
]

export const LeaderboardTable: React.FC<Props> = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.state, {
    key: 'place',
    direction: 'ascending',
  })

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return
    }

    const { key, direction } = sortConfig

    if (key === name) {
      return `${styles.head} ${styles[direction]}`
    } else {
      return styles.head
    }
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {HEADERS.map(({ name, title }, index) => (
            <th
              key={index}
              onClick={() => requestSort(name)}
              className={getClassNamesFor(name)}>
              {title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.row} key={item.id}>
            <td className={styles.columnPlace}>{item.place}</td>
            <td className={styles.columnName}>{item.name}</td>
            <td className={styles.columnScore}>{item.score}</td>
            <td className={styles.columnGames}>{item.games}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
