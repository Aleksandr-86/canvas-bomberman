import React from 'react'
import { useSortableData } from '../../hooks/userSortableData'
import { PlayerStats } from '../../store/leadeboard/leaderboardSlice'
import styles from './leaderboardTable.module.css'

interface Props {
  state: PlayerStats[]
}

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
      return `${styles.title} ${styles[direction]}`
    } else {
      return styles.title
    }
  }

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div
          onClick={() => requestSort('place')}
          className={styles.columnPlace + ' ' + getClassNamesFor('place')}>
          Место
        </div>
        <div
          onClick={() => requestSort('name')}
          className={styles.columnName + ' ' + getClassNamesFor('name')}>
          Имя игрока
        </div>
        <div
          onClick={() => requestSort('score')}
          className={styles.columnScore + ' ' + getClassNamesFor('score')}>
          Очки
        </div>
        <div
          onClick={() => requestSort('games')}
          className={styles.columnGames + ' ' + getClassNamesFor('games')}>
          Игр сыграно
        </div>
      </div>

      <div className={styles.body}>
        {items.map(item => (
          <div className={styles.row} key={item.id}>
            <div className={styles.columnPlace + ' ' + styles.paddingBorder}>
              {item.place}
            </div>
            <div className={styles.columnName + ' ' + styles.paddingBorder}>
              {item.name}
            </div>
            <div className={styles.columnScore + ' ' + styles.paddingBorder}>
              {item.score}
            </div>
            <div className={styles.columnGames + ' ' + styles.paddingBorder}>
              {item.games}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
