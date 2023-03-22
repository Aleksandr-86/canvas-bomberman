import { useEffect } from 'react'
import { useAppDispatch } from '../store/hooks'
import { oauth } from '../store/userActions'
import { getCurrentTheme } from '../store/themeActions'
import { OAUTH_REDIRECT_URI } from '../features/constants'
import { me } from '../store/userActions'
import { THEME_LOCAL_STORAGE_KEY } from '../features/constants'
import { Theme, setTheme } from '../store/themeSlice'

export const useLoadInitialData = (code: string | null) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (code) {
      dispatch(oauth({ code, redirect_uri: OAUTH_REDIRECT_URI }))
        .then(() => dispatch(me()).unwrap())
        .then(async ({ id }) => {
          dispatch(getCurrentTheme(id))
        })
      return
    }

    dispatch(me())
      .unwrap()
      .then(async ({ id }) => {
        dispatch(getCurrentTheme(id))
      })
      .catch(async error => {
        if (error.status === 401) {
          let theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

          if (!theme) {
            theme = Theme.LIGHT
            localStorage.setItem(THEME_LOCAL_STORAGE_KEY, Theme.LIGHT)
          }

          document.documentElement.dataset.theme = theme
          dispatch(setTheme(theme as Theme))
        }
      })
  }, [])
}
