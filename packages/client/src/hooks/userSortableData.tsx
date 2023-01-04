import { useMemo, useState } from 'react'

interface Items {
  [index: string]: string | number
}

interface SortConfig {
  key: string
  direction: string
}

export const useSortableData = (items: Items[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null)

  const sortedItems = useMemo(() => {
    const sortableItems = [...items]

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }

        return 0
      })
    }

    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: string) => {
    let direction = 'ascending'

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }

    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}
