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
      return `${styles.head} ${styles[direction]}`
    } else {
      return styles.head
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
          <tr className={styles.row} key={item.id}>
            <td className={styles.columnPlace}>{item.place}</td>
            <td className={styles.columnName}>{item.name}</td>
            <td className={styles.columnScore}>{item.score}</td>
            <td className={styles.columnGames}>{item.games}</td>
            <td className={styles.columnTotalTime}>{item.totalTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
