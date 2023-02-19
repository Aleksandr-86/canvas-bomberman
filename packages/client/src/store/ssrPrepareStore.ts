import routes from '../routes'
import { matchPath } from 'react-router-dom'
import { createStore } from '.'

export async function prepareStore(url: string) {
  const dataRequirements: (Promise<unknown> | void)[] = []

  const store = createStore(undefined)

  routes.some(route => {
    const { fetchData } = route
    const match = matchPath(url, route.path)

    if (match && fetchData) {
      dataRequirements.push(
        fetchData({
          dispatch: store.dispatch,
          match,
        })
      )
    }

    return Boolean(match)
  })

  await Promise.all(dataRequirements)

  return store
}
