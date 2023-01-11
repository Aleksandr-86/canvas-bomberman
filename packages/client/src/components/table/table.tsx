import { useSortableData } from '../../hooks/userSortableData'

import styles from './table.module.css'

interface Props {
  playersStats: {
    id: number
    place: number
    name: string
    score: number
    games: number
    totalTime: number
  }[]
}

const headers = [
  ['place', 'Место'],
  ['name', 'Имя игрока'],
  ['score', 'Очки'],
  ['games', 'Игр'],
  ['totalTime', 'Время (мин)'],
]

export const Table = (props: Props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.playersStats,
    {
      key: 'place',
      direction: 'ascending',
    }
  )

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return
    }

    const { key, direction } = sortConfig

    if (key === name) {
      return `${styles.table__head} ${styles[direction]}`
    } else {
      return styles.table__head
    }
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map(([headerName, headerTitle], index) => (
            <th
              key={index}
              onClick={() => requestSort(headerName)}
              className={getClassNamesFor(headerName)}>
              {headerTitle}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.table__row} key={item.id}>
            <td className={styles.table__column_place}>{item.place}</td>
            <td className={styles.table__column_name}>{item.name}</td>
            <td className={styles.table__column_score}>{item.score}</td>
            <td className={styles.table__column_games}>{item.games}</td>
            <td className={styles.table__column_totalTime}>{item.totalTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
