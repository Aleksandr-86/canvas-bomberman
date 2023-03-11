import { routes } from '../routes'
import { matchPath } from 'react-router-dom'
import { createStore, RootState } from '.'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { UserDTO } from '../typings/api'
import { transformUser } from '../features/utils/apiTransformers'

export async function prepareStore(url: string, user?: UserDTO) {
  const dataRequirements: (Promise<unknown> | void)[] = []

  let prst = undefined
  if (user) {
    prst = {
      user: {
        error: null,
        isAuth: true,
        isLoading: false,
        user: transformUser(user),
      },
    }
  }

  const store = createStore(prst)

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
