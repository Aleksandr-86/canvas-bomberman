import {
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'
import { Vec2 } from '../features/game/utils/vec2'

const isSerializable = (value: any) => {
  return value instanceof Vec2 || isPlain(value)
}

const getEntries = (value: any) => {
  return value instanceof Vec2
    ? Object.entries(value.pojo)
    : Object.entries(value)
}

export const serializableMiddleware =
  createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
  })
