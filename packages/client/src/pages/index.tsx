import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../routes'

const AppRouting = () => {
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} element={React.createElement(element)} path={path} />
      ))}
    </Routes>
  )
}

export { AppRouting }
