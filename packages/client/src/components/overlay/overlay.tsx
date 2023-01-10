import type { ReactNode } from 'react'

import styles from './overlay.module.css'

interface Props {
  children?: ReactNode
}

export const Overlay = (props: Props) => {
  const { children } = props

  return <div className={styles.overlay}>{children}</div>
}
