import { type MutableRefObject, useEffect } from 'react'
import { toggleFullScreen } from '../features/toggleFullScreen/toggleFullScreen'
import type { KeyboardKeys } from '../env'

export const useFullScreen = <T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  activeKey: KeyboardKeys = `F`
) => {
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      const key = evt.code

      if (key === `Key${activeKey}`) {
        if (ref.current) {
          toggleFullScreen(ref.current)
        }
      }
    }

    document.addEventListener(`keydown`, onKeyDown)

    return () => {
      document.removeEventListener(`keydown`, onKeyDown)
    }
  }, [ref, activeKey])
}
