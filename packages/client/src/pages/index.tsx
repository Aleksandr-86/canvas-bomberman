import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../routes'
import { useAppDispatch } from '../store/hooks'
import { me } from '../store/userActions'

const AppRouting = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(me())
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
