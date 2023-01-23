import { type MutableRefObject, useCallback, useEffect } from 'react'
import { toggleFullScreen } from '../features/toggleFullScreen/toggleFullScreen'

export const useFullScreen = <T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  activeKey = `f`
) => {
  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      const activeKeyLowerCase = activeKey.toLocaleLowerCase()
      const key = evt.key.toLowerCase()

      if (key === activeKeyLowerCase) {
        if (ref.current) {
          toggleFullScreen(ref.current)
        }
      }
    },
    [ref, activeKey]
  )

  useEffect(() => {
    document.addEventListener(`keydown`, onKeyDown)
    return () => {
      document.removeEventListener(`keydown`, onKeyDown)
    }
  })
}
