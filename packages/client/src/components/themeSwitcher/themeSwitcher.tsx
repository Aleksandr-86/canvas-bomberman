import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getTheme, getUser } from '../../store/selectors'
import { updateCurrentTheme } from '../../store/themeActions'
import { Theme } from '../../store/themeSlice'
import styles from './themeSwitcher.module.css'

export const ThemeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(getTheme)
  const {
    user: { id },
  } = useAppSelector(getUser)

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === Theme.DARK}
        onChange={() => {
          if (theme === Theme.LIGHT) {
            dispatch(updateCurrentTheme({ id, theme: Theme.DARK }))
          } else {
            dispatch(updateCurrentTheme({ id, theme: Theme.LIGHT }))
          }
        }}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}
