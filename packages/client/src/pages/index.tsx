import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../routes'
import { useLoadInitialData } from '../hooks/useLoadInitialData'
import { useSearchParams } from 'react-router-dom'

const AppRouting = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get(`code`)

  useLoadInitialData(code)

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} element={React.createElement(element)} path={path} />
      ))}
    </Routes>
  )
}

export { AppRouting }
