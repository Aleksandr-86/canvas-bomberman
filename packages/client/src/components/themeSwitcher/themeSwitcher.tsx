import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getTheme } from '../../store/selectors'
import { setTheme } from '../../store/themeSlice'
import styles from './themeSwitcher.module.css'

export const ThemeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(getTheme)

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => {
          if (theme === `light`) {
            document.documentElement.dataset.theme = `dark`
            dispatch(setTheme(`dark`))
          } else {
            document.documentElement.dataset.theme = `light`
            dispatch(setTheme(`light`))
          }
        }}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}
