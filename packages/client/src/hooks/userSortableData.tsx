import { useMemo, useState } from 'react'

interface tableRow {
  [index: string]: string | number
}

interface SortConfig {
  key: string
  direction: string
}

// Регулирует однократный вывод сообщения об ошибке
let keyPropError = false

/**
 * Сортирует переданный массив объектов.
 * tablesRows - массив объектов с данными для заполнения строк таблицы.
 * config - фильтр по умолчанию, где: key - имя
 * колонки для сортировки, direction - порядок сортировки
 * (ascending - восходящий, descending - нисходящий).
 */
export const useSortableData = (tableRows: tableRow[], config: SortConfig) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(config)

  const sortedItems = useMemo(() => {
    const sortableItems = [...tableRows]

    /**
     * Проверяет наличие переданных в sortConfig ключей
     * в объектах массива tableRows
     */
    for (let i = 0; i < sortableItems.length; i++) {
      const item = sortableItems[i]

      if (!keyPropError && !(sortConfig.key in item)) {
        console.error(
          new Error(
            `Ключ "${sortConfig.key}" отсутствует в ключах объектов массива tableRows`
          )
        )

        keyPropError = true
      }
    }

    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }

      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      }

      return 0
    })

    return sortableItems
  }, [tableRows, sortConfig])

  const requestSort = (key: string) => {
    let direction = 'ascending'

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}
