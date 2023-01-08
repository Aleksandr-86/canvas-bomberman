import { useSortableData } from '../../hooks/userSortableData'

import styles from './table.module.css'

interface Props {
  caption: string
  userStats: {
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
  const { items, requestSort, sortConfig } = useSortableData(props.userStats, {
    key: 'place',
    direction: 'ascending',
  })

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
      <caption className={styles.table__caption}>{props.caption}</caption>

      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              onClick={() => requestSort(header[0])}
              className={getClassNamesFor(header[0])}>
              {header[1]}
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
