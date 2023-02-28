import { routes } from '../routes'
import { matchPath } from 'react-router-dom'
import { createStore, RootState } from '.'
import { AsyncThunkAction } from '@reduxjs/toolkit'

export async function prepareStore(url: string) {
  const dataRequirements: (Promise<unknown> | void)[] = []

  const store = createStore(undefined)

  routes.some(route => {
    const { initStoreWithServer } = route
    const match = matchPath(url, route.path)

    if (match && initStoreWithServer) {
      const slug = match.params.slug || ''

      initStoreWithServer(slug).map(
        (
          fetchData: AsyncThunkAction<unknown, unknown, { state: RootState }>
        ): void => {
          dataRequirements.push(store.dispatch(fetchData))
        }
      )
    }
    return Boolean(match)
  })

  await Promise.all(dataRequirements)
  return store
}
