import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../routes'
import { useAppDispatch } from '../store/hooks'
import { me } from '../store/userActions'
import { getCurrentTheme } from '../store/themeActions'
import { oauth } from '../store/userActions'
import { useSearchParams } from 'react-router-dom'
import { REDIRECT_URI } from '../features/oauth/onOauthRequest'
import { setTheme, Theme } from '../store/themeSlice'
import { THEME_LOCAL_STORAGE_KEY } from '../features/constants'

const AppRouting = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const code = searchParams.get(`code`)

  useEffect(() => {
    if (code) {
      dispatch(oauth({ code, redirect_uri: REDIRECT_URI }))
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

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} element={React.createElement(element)} path={path} />
      ))}
    </Routes>
  )
}

export { AppRouting }
