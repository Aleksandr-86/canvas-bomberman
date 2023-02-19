import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from '../routes'

const AppRouting = () => {
  return (
    <Routes>
      {routes.map(({ fetchData, element, ...routeProps }) => (
        <Route
          key={routeProps.path}
          element={React.createElement(element)}
          {...routeProps}
        />
      ))}
    </Routes>
  )
}

export { AppRouting }
