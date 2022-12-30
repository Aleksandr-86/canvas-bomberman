import { configureStore } from '@reduxjs/toolkit'

// стор-заглушка без редьюсеров
const store = configureStore({
  reducer: {},
})

export { store }
